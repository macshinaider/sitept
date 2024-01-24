/*
  Warnings:

  - Made the column `ID` on table `VIP` required. This step will fail if there are existing NULL values in that column.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[VIP] ALTER COLUMN [ID] VARCHAR(50) NOT NULL;
ALTER TABLE [dbo].[VIP] ADD CONSTRAINT VIP_pkey PRIMARY KEY CLUSTERED ([ID]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
