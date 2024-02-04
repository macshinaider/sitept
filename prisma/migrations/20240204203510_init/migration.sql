BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[BannedMac] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Name] VARCHAR(50) NOT NULL,
    [MacAddress] VARCHAR(20) NOT NULL,
    [szHDUUID] VARCHAR(20) NOT NULL,
    [Banned] INT NOT NULL,
    CONSTRAINT [PK_BannedMac] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Caravans] (
    [ID] VARCHAR(50),
    [Name] VARCHAR(50),
    [CaravanName] VARCHAR(50),
    [CaravanType] VARCHAR(50),
    [RemainingTime] INT,
    [Identity] INT NOT NULL IDENTITY(1,1)
);

-- CreateTable
CREATE TABLE [dbo].[GameMasters] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Account] VARCHAR(32) NOT NULL,
    [GameMasterLevel] INT NOT NULL,
    CONSTRAINT [PK_GameMasterList] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[PremiumData] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [CharacterName] VARCHAR(50) NOT NULL,
    [TimeLeft] INT NOT NULL,
    [ItemType] INT NOT NULL,
    CONSTRAINT [PK_PremiumData] PRIMARY KEY CLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[sysdiagrams] (
    [name] NVARCHAR(128) NOT NULL,
    [principal_id] INT NOT NULL,
    [diagram_id] INT NOT NULL IDENTITY(1,1),
    [version] INT,
    [definition] VARBINARY(max),
    CONSTRAINT [PK__sysdiagrams__060DEAE8] PRIMARY KEY CLUSTERED ([diagram_id]),
    CONSTRAINT [UK_principal_name] UNIQUE NONCLUSTERED ([principal_id],[name])
);

-- CreateTable
CREATE TABLE [dbo].[UserInfo] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [accountID] VARCHAR(50) NOT NULL,
    [Name] VARCHAR(50) NOT NULL,
    [Lvl] INT NOT NULL,
    [Exp] INT NOT NULL,
    [DateUp] DATETIME NOT NULL,
    [Kills] INT NOT NULL,
    [Deads] INT NOT NULL,
    [Class] INT NOT NULL,
    CONSTRAINT [PK_UserInfo_ID] PRIMARY KEY CLUSTERED ([ID]),
    CONSTRAINT [UK_UserInfo_ID] UNIQUE NONCLUSTERED ([ID])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Username] VARCHAR(50) NOT NULL,
    [Password] VARCHAR(50) NOT NULL,
    [Blocked] TINYINT NOT NULL,
    [UserCoin] INT NOT NULL,
    [UserTime] INT NOT NULL,
    [Confirmed] BIT NOT NULL CONSTRAINT [Users_Confirmed_df] DEFAULT 0,
    [Whatsapp] NVARCHAR(1000) NOT NULL,
    [CodigoConfirm] NVARCHAR(1000),
    [Nome] NVARCHAR(1000) CONSTRAINT [Users_Nome_df] DEFAULT 'null',
    [Cpf] NVARCHAR(1000) CONSTRAINT [Users_Cpf_df] DEFAULT 'null',
    [Iduserasaas] NVARCHAR(1000) CONSTRAINT [Users_Iduserasaas_df] DEFAULT 'null',
    [Cep] NVARCHAR(1000) CONSTRAINT [Users_Cep_df] DEFAULT 'null',
    CONSTRAINT [PK_Users_ID] PRIMARY KEY CLUSTERED ([ID]),
    CONSTRAINT [UK_Users_ID] UNIQUE NONCLUSTERED ([ID]),
    CONSTRAINT [UK_Users_Username] UNIQUE NONCLUSTERED ([Username]),
    CONSTRAINT [Users_Whatsapp_key] UNIQUE NONCLUSTERED ([Whatsapp])
);

-- CreateTable
CREATE TABLE [dbo].[Group] (
    [ID] INT NOT NULL IDENTITY(1,1),
    [Groupid] NVARCHAR(1000) NOT NULL,
    [Size] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Group_pkey] PRIMARY KEY CLUSTERED ([ID]),
    CONSTRAINT [Group_ID_key] UNIQUE NONCLUSTERED ([ID]),
    CONSTRAINT [Group_Groupid_key] UNIQUE NONCLUSTERED ([Groupid])
);

-- CreateTable
CREATE TABLE [dbo].[VIP] (
    [ID] VARCHAR(50),
    [DiaInicio] INT,
    [MesInicio] INT,
    [AnoInicio] INT,
    [DiaExpira] INT,
    [MesExpira] INT,
    [AnoExpira] INT,
    [VipLevel] INT
);

-- CreateTable
CREATE TABLE [dbo].[Pedidos] (
    [id] INT NOT NULL IDENTITY(1,1),
    [numero] NVARCHAR(1000) NOT NULL,
    [User] NVARCHAR(1000) NOT NULL,
    [QRcode] VARBINARY(max) NOT NULL,
    [pago] BIT NOT NULL CONSTRAINT [Pedidos_pago_df] DEFAULT 0,
    CONSTRAINT [Pedidos_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Pedidos_id_key] UNIQUE NONCLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
