-- CreateTable
CREATE TABLE "Urls" (
    "id" TEXT NOT NULL,
    "shortUrl" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Urls_shortUrl_key" ON "Urls"("shortUrl");
