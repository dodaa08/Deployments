import z from "zod";

const UrlT = z.object({
    id : z.string(),
    shortUrl : z.string().min(5, {message : "Must be at least 5 characters"}),
    longUrl : z.string()
});

export { UrlT };