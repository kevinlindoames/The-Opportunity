// src/components/opportunities/OpportunityDetails.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Opportunity } from "@/types/Opportunity";
import opportunityService from "@/services/opportunityService";

export default function OpportunityDetails() {
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        // Necesitarás agregar este método a tu servicio
        const data = await opportunityService.getOpportunityById(id);
        setOpportunity(data);
      } catch (error) {
        toast.error("Error", {
          description: "No se pudo cargar la oportunidad",
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOpportunity();
    }
  }, [id]);

  const handleToggleFollow = async () => {
    if (!opportunity) return;

    try {
      const result = await opportunityService.toggleFollowOpportunity(id);
      setOpportunity({
        ...opportunity,
        is_followed: result.followed,
      });

      if (result.followed) {
        toast.success("Oportunidad seguida", {
          description: "La oportunidad ha sido agregada a tu seguimiento",
        });
      } else {
        toast.info("Oportunidad no seguida", {
          description: "La oportunidad ha sido removida de tu seguimiento",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: "No se pudo cambiar el estado de seguimiento",
      });
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            Cargando información de la oportunidad...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!opportunity) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8 text-red-500">
            No se encontró la oportunidad solicitada
          </div>
          <div className="flex justify-center mt-4">
            <Button onClick={() => router.push("/opportunities")}>
              Volver a oportunidades
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
            <CardDescription className="mt-2 text-base">
              Código: <span className="font-medium">{opportunity.code}</span>
            </CardDescription>
          </div>
          <Badge
            variant={opportunity.type === "tender" ? "default" : "secondary"}
          >
            {opportunity.type === "tender" ? "Licitación" : "Compra Ágil"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Fecha de publicación
            </h3>
            <p>{formatDate(opportunity.publish_date)}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">
              Fecha de cierre
            </h3>
            <p>{formatDate(opportunity.close_date)}</p>
          </div>
        </div>

        {opportunity.description && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Descripción
            </h3>
            <p>{opportunity.description}</p>
          </div>
        )}

        {opportunity.budget && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Presupuesto
            </h3>
            <p>${opportunity.budget.toLocaleString()}</p>
          </div>
        )}

        {opportunity.requirements && opportunity.requirements.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Requisitos
            </h3>
            <ul className="list-disc pl-5">
              {opportunity.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {opportunity.categories && opportunity.categories.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Categorías
            </h3>
            <div className="flex flex-wrap gap-2">
              {opportunity.categories.map((category, index) => (
                <Badge key={index} variant="outline">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => router.back()}>
          Volver
        </Button>
        <Button
          variant={opportunity.is_followed ? "default" : "outline"}
          onClick={handleToggleFollow}
        >
          {opportunity.is_followed ? "Dejar de seguir" : "Seguir oportunidad"}
        </Button>
      </CardFooter>
    </Card>
  );
}
