/*
  Warnings:

  - You are about to alter the column `Whatsapp` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `NVarChar(1000)` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[Users] DROP CONSTRAINT [Users_Whatsapp_key];

-- AlterTable
ALTER TABLE [dbo].[Users] ALTER COLUMN [Whatsapp] INT NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[Users] ADD CONSTRAINT [Users_Whatsapp_key] UNIQUE NONCLUSTERED ([Whatsapp]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
