import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1683631612281 implements MigrationInterface {
    name = 'Initial1683631612281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "Cars_CarsServices_CarID_fkey"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "Cars_CarsServices_CarServiceID_fkey"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "Cars_CarsServices_CarID_CarServiceID_key"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "Cars_CarsServices_pkey"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP COLUMN "car_services_id"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD "carsService_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "PK_15bb1201e6fa8f7516d85d9396a" PRIMARY KEY ("carsService_id")`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD "car_service_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "PK_15bb1201e6fa8f7516d85d9396a"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "PK_227dc5cf21d1298f9d335bc32b3" PRIMARY KEY ("carsService_id", "car_service_id")`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "Cars_pkey"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "PK_fc218aa84e79b477d55322271b6" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "carname"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "carname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "manufacturer"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "manufacturer" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP CONSTRAINT "CarsServices_pkey"`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD CONSTRAINT "PK_a5c04ab9b0aa0da6b74ed5ba69a" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD CONSTRAINT "UQ_528f9d539d2cf63cbdf4e2d7859" UNIQUE ("servicename")`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP CONSTRAINT "Workers_pkey"`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" ADD CONSTRAINT "PK_e950c9aba3bd84a4f193058d838" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "fullname" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "position" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "PK_227dc5cf21d1298f9d335bc32b3"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "PK_6bf8ab33b9ec6b7380912fc5700" PRIMARY KEY ("carsService_id", "car_service_id", "car_id")`);
        await queryRunner.query(`CREATE INDEX "IDX_fc827ee0b8a496ec4731d6dbc0" ON "cars_carsservices" ("car_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_15bb1201e6fa8f7516d85d9396" ON "cars_carsservices" ("carsService_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9ac84ee1f4fcd44a60d8a3874" ON "cars_carsservices" ("car_service_id") `);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "FK_fc827ee0b8a496ec4731d6dbc0b" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "FK_15bb1201e6fa8f7516d85d9396a" FOREIGN KEY ("carsService_id") REFERENCES "cars_services"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "FK_f9ac84ee1f4fcd44a60d8a38742" FOREIGN KEY ("car_service_id") REFERENCES "cars_services"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "FK_f9ac84ee1f4fcd44a60d8a38742"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "FK_15bb1201e6fa8f7516d85d9396a"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "FK_fc827ee0b8a496ec4731d6dbc0b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9ac84ee1f4fcd44a60d8a3874"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_15bb1201e6fa8f7516d85d9396"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fc827ee0b8a496ec4731d6dbc0"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "PK_6bf8ab33b9ec6b7380912fc5700"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "PK_227dc5cf21d1298f9d335bc32b3" PRIMARY KEY ("carsService_id", "car_service_id")`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "phone" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "position"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "position" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "fullname" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" DROP CONSTRAINT "PK_e950c9aba3bd84a4f193058d838"`);
        await queryRunner.query(`ALTER TABLE "workers" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "workers" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workers" ADD CONSTRAINT "Workers_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD "price" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP CONSTRAINT "UQ_528f9d539d2cf63cbdf4e2d7859"`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP CONSTRAINT "PK_a5c04ab9b0aa0da6b74ed5ba69a"`);
        await queryRunner.query(`ALTER TABLE "cars_services" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_services" ADD CONSTRAINT "CarsServices_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "manufacturer"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "manufacturer" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "carname"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "carname" character varying(75) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "PK_fc218aa84e79b477d55322271b6"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "id" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "Cars_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "PK_227dc5cf21d1298f9d335bc32b3"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "PK_15bb1201e6fa8f7516d85d9396a" PRIMARY KEY ("carsService_id")`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP COLUMN "car_service_id"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP CONSTRAINT "PK_15bb1201e6fa8f7516d85d9396a"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" DROP COLUMN "carsService_id"`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD "car_services_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD "id" integer NOT NULL DEFAULT nextval('"Cars_CarsServices_ID_seq"')`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "Cars_CarsServices_pkey" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "Cars_CarsServices_CarID_CarServiceID_key" UNIQUE ("car_id", "car_services_id")`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "Cars_CarsServices_CarServiceID_fkey" FOREIGN KEY ("car_services_id") REFERENCES "cars_services"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars_carsservices" ADD CONSTRAINT "Cars_CarsServices_CarID_fkey" FOREIGN KEY ("car_id") REFERENCES "cars"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
