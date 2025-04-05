import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Controller,
  Get,
  Patch,
  Param,
  Query,
  UseGuards,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard/jwt-auth.guard';
import { FindOpportunitiesDto } from 'src/opportunities/dto/find-opportunities/find-opportunities';
import { OpportunitiesService } from 'src/opportunities/services/opportunities/opportunities.service';

@ApiTags('opportunities')
@Controller('opportunities')
export class OpportunitiesController {
  constructor(private readonly opportunitiesService: OpportunitiesService) {}

  @Get()
  @UseInterceptors(CacheInterceptor)
  @ApiOperation({ summary: 'Get all opportunities with filters' })
  async findAll(@Query() filters: FindOpportunitiesDto) {
    console.log('Filtros recibidos:', filters);

    return this.opportunitiesService.findAll(filters);
  }

  @Get('followed')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get followed opportunities' })
  async findFollowed(@Request() req, @Query() filters: FindOpportunitiesDto) {
    return this.opportunitiesService.findFollowed(req.user.userId, filters);
  }

  @Patch(':id/follow')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Toggle follow status for an opportunity' })
  async toggleFollow(@Request() req, @Param('id') id: string) {
    return this.opportunitiesService.toggleFollow(req.user.userId, id);
  }
}
