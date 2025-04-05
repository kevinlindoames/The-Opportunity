"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../lib/redux/store";
import {
  fetchOpportunities,
  fetchFollowedOpportunities,
  toggleFollow,
} from "../../lib/redux/slices/opportunitiesSlice";
import { Opportunity } from "../../types/Opportunity";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface OpportunityTableProps {
  showOnlyFollowed?: boolean;
}

const OpportunityTable = ({
  showOnlyFollowed = false,
}: OpportunityTableProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, followedItems, status, filters } = useSelector(
    (state: RootState) => state.opportunities
  );

  // Determinar qué oportunidades mostrar según el modo
  const opportunities = showOnlyFollowed ? followedItems : items;

  // Cargar datos al montar el componente o cuando cambian los filtros
  useEffect(() => {
    if (showOnlyFollowed) {
      dispatch(fetchFollowedOpportunities(filters));
    } else {
      dispatch(fetchOpportunities(filters));
    }
  }, [dispatch, filters, showOnlyFollowed]);

  // Manejar el toggle de seguimiento
  const handleToggleFollow = (id: string, currentStatus: boolean) => {
    dispatch(toggleFollow(id))
      .unwrap()
      .then(() => {
        toast(currentStatus ? "Oportunidad removida" : "Oportunidad seguida", {
          description: currentStatus
            ? "La oportunidad ha sido removida de tu seguimiento"
            : "La oportunidad ha sido agregada a tu seguimiento",
        });
      })
      .catch(() => {
        toast.error("Error", {
          description: "No se pudo cambiar el estado de seguimiento",
        });
      });
  };

  // Formatear fecha para mostrar
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (status === "loading") {
    return (
      <Card className="p-6">
        <div className="text-center py-4">Cargando oportunidades...</div>
      </Card>
    );
  }

  if (status === "failed") {
    return (
      <Card className="p-6">
        <div className="text-center py-4 text-red-500">
          Error al cargar oportunidades. Intente de nuevo.
        </div>
      </Card>
    );
  }

  if (opportunities.length === 0) {
    return (
      <Card className="p-6">
        <div className="text-center py-4">
          No hay oportunidades disponibles con los filtros seleccionados.
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <div className="rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Fecha Publicación</TableHead>
              <TableHead>Fecha Cierre</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {opportunities.map((opportunity: Opportunity) => (
              <TableRow key={opportunity._id}>
                <TableCell className="font-medium">
                  {opportunity.code}
                </TableCell>
                <TableCell>{opportunity.title}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      opportunity.type === "tender" ? "default" : "secondary"
                    }
                  >
                    {opportunity.type === "tender"
                      ? "Licitación"
                      : "Compra Ágil"}
                  </Badge>
                </TableCell>
                <TableCell>{formatDate(opportunity.publish_date)}</TableCell>
                <TableCell>{formatDate(opportunity.close_date)}</TableCell>
                <TableCell>
                  <Button
                    variant={opportunity.is_followed ? "default" : "outline"}
                    size="sm"
                    onClick={() =>
                      handleToggleFollow(
                        opportunity._id,
                        opportunity.is_followed
                      )
                    }
                  >
                    {opportunity.is_followed ? "Siguiendo" : "Seguir"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default OpportunityTable;
