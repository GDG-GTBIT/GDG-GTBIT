import { blogs, blogCategories, eventCategories, users } from "./schema";

export type Blog = typeof blogs.$inferSelect;
export type BlogCategory = typeof blogCategories.$inferSelect;
export type EventCategory = typeof eventCategories.$inferSelect;
export type User = typeof users.$inferSelect;

export type BlogInsert = typeof blogs.$inferInsert;
export type BlogCategoryInsert = typeof blogCategories.$inferInsert;
export type EventCategoryInsert = typeof eventCategories.$inferInsert;
export type UserInsert = typeof users.$inferInsert;

export type BlogWithRelations = Blog & {
    category: BlogCategory;
    author: User;
};

export type EventWithRelations = Event & {
    category: EventCategory;
    author: User;
};

export type BlogCategoryWithRelations = BlogCategory & {
    blogs: Blog[];
};

export type EventCategoryWithRelations = EventCategory & {
    events: Event[];
};

export type UserWithRelations = User & {
    blogs: Blog[];
    events: Event[];
};




