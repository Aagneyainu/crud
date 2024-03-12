import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity({ name: 'branchmas' })
export class branchmas {
  @PrimaryColumn({ length: 10 })
  br_code: string;

  //   @ApiPropertyOptional()
  @Column({ length: 255, nullable: true })
  br_desc: string;

  @Column({ nullable: true })
  br_addptr: number;

//   @Column({ length: 15, nullable: true })
//   br_firmptr: string;

  @Column({ length: 1, nullable: true })
  br_active: string;

  @Column({ nullable: true })
  br_slno: number;

  @Column({ length: 1, nullable: true })
  br_issync: string;

  @Column({ length: 100, nullable: true })
  br_otherdet1: string;

  @Column({ nullable: true })
  cngd_dt: Date;

  @Column({ length: 100, nullable: true })
  br_language_string: string;
}
