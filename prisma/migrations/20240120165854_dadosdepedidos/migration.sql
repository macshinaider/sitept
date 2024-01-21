BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Pedidos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] INT NOT NULL,
    [usersID] INT NOT NULL,
    CONSTRAINT [Pedidos_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Pedidos_id_key] UNIQUE NONCLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Pedidos] ADD CONSTRAINT [Pedidos_usersID_fkey] FOREIGN KEY ([usersID]) REFERENCES [dbo].[Users]([ID]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
