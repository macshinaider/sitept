/*
  Warnings:

  - Added the required column `QRcode` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `User` to the `Pedidos` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Pedidos] DROP CONSTRAINT [Pedidos_usersID_fkey];

-- AlterTable
ALTER TABLE [dbo].[Pedidos] ADD [QRcode] NVARCHAR(1000) NOT NULL,
[User] INT NOT NULL,
[pago] BIT NOT NULL CONSTRAINT [Pedidos_pago_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
