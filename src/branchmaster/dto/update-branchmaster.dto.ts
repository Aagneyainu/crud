import { PartialType } from '@nestjs/mapped-types';
import { CreateBranchmasterDto } from './create-branchmaster.dto';

export class UpdateBranchmasterDto extends PartialType(CreateBranchmasterDto) {}
