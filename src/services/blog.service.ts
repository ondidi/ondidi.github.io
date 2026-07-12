import { supabase } from "@/lib/supabase";

export class BlogService {

    async getArtigos() {

        const { data, error } = await supabase
            .from("artigos")
            .select("*")
            .eq("status", "Publicado")
            .order("data_publicacao", {
                ascending: false,
            });

        if (error) {
            console.error(error);
            return [];
        }

        return data ?? [];

    }

}

export const blogService = new BlogService();