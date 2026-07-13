import { supabase } from "@/lib/supabase";

export class BlogService {

    async getArtigos() {

        const { data, error } = await supabase
            .from("artigos")
            .select("*")
            .order("data_publicacao", { ascending: false });

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