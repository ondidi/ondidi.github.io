import { supabase } from "@/lib/supabase";

export class BlogService {

    async getArtigos() {
    const inicio = Date.now();

    const { data, error } = await supabase
        .from("artigos")
        .select("id, titulo, slug, chamada, data_publicacao")
        .order("data_publicacao", { ascending: false })
        .limit(5);

        console.log(
            `[Blog] Consulta Supabase: ${Date.now() - inicio} ms`
        );

        if (error) {
            console.error(error);
            return [];
        }

        return data ?? [];
    }
    async getArtigoBySlug(slug: string) {

        const { data, error } = await supabase
            .from("artigos")
            .select("*")
            .eq("slug", slug)
            .single();

        if (error) {
            console.error(error);
            return null;
        }

        return data;
    }

}

export const blogService = new BlogService();