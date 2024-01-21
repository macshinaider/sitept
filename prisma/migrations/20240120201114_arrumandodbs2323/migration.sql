/*
  Warnings:

  - Added the required column `QRcode` to the `Pedidos` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Pedidos] DROP COLUMN [QRcode];
ALTER TABLE [dbo].[Pedidos] ADD [QRcode] VARBINARY(max) NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
