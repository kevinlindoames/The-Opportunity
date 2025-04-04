import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    // Obtenemos el secreto JWT de la configuración antes de pasarlo al constructor
    const jwtSecret = configService.get<string>('JWT_SECRET');

    // Verificamos que el secreto esté definido y lanzamos un error claro si no lo está
    if (!jwtSecret) {
      throw new Error(
        'JWT_SECRET debe estar definido en las variables de entorno. Por favor, asegúrate de tener un archivo .env con esta variable configurada.',
      );
    }

    // Ahora pasamos un valor que sabemos con certeza que no es undefined
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  // Este método se llama para cada solicitud autenticada
  // después de que el token JWT ha sido validado y decodificado
  async validate(payload: any) {
    // Devolvemos un objeto con la información del usuario
    // que estará disponible en el objeto Request
    return {
      userId: payload.sub, // El ID del usuario (subject del token)
      username: payload.username, // El nombre de usuario
      role: payload.role, // El rol del usuario para autorización
    };
  }
}
