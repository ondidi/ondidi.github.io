export interface BlogPost {
    id: string;
    slug: string;

    title: string;
    subtitle?: string;

    excerpt: string;
    content: string;

    cover_image: string;

    category: string;

    author: string;

    published_at: string;

    reading_time: number;

    featured: boolean;

    tags?: string[];

    created_at?: string;
    updated_at?: string;
}