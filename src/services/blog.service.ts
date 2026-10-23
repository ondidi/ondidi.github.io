import { supabase } from "@/lib/supabase";

export class BlogService {

    async getArtigos() {

        const { data, error } = await supabase
            .from("artigos")
            .select("id, titulo, slug, chamada, data_publicacao, imagem_principal")
            .order("data_publicacao", { ascending: false })
            .limit(5);

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