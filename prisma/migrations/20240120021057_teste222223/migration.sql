/*
  Warnings:

  - A unique constraint covering the columns `[Cpf]` on the table `Users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Iduserasaas]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- CreateIndex
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_Cpf_key] UNIQUE NONCLUSTERED ([Cpf]);

-- CreateIndex
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_Iduserasaas_key] UNIQUE NONCLUSTERED ([Iduserasaas]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
