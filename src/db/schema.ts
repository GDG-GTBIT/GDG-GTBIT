import { pgTable, text, varchar, timestamp, boolean, pgEnum, integer, uuid } from "drizzle-orm/pg-core";
import { BlogCategory, BlogStatus, EventCategory, EventStatus, Role } from "./enums";
import { enumToPgEnum } from "./utils";

export const roleEnum = pgEnum('role', enumToPgEnum(Role));
export const eventCategoryEnum = pgEnum('event_category', enumToPgEnum(EventCategory));
export const blogCategoryEnum = pgEnum('blog_category', enumToPgEnum(BlogCategory));
export const eventStatusEnum = pgEnum('event_status', enumToPgEnum(EventStatus));
export const blogStatusEnum = pgEnum('blog_status', enumToPgEnum(BlogStatus));

export const users = pgTable('users', {
    id: uuid('id').primaryKey(),
    fullName: text('full_name').notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(),
    phone: varchar('phone', { length: 20 }),
    password: text('password').notNull(),
    role: roleEnum('role').notNull().default(Role.USER),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const events = pgTable('events', {
    id: uuid('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull().unique(),
    status: eventStatusEnum('status').notNull().default(EventStatus.UPCOMING),
    description: text('description').notNull(),
    location: text('location').notNull(),
    startDate: timestamp('start_date').notNull(),
    endDate: timestamp('end_date').notNull(),
    maxAttendees: integer('max_attendees'),
    isPublished: boolean('is_published').default(false).notNull(),
    authorId: uuid('author_id').references(() => users.id).notNull(),
    categoryId: uuid('category_id').references(() => eventCategories.id).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const eventCategories = pgTable('event_categories', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    category: eventCategoryEnum('category').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const blogs = pgTable('blogs', {
    id: uuid('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content').notNull(),
    slug: text('slug').notNull().unique(),
    featuredImage: text('featured_image'),
    status: blogStatusEnum('status').notNull().default(BlogStatus.DRAFT),
    isPublished: boolean('is_published').default(false).notNull(),
    authorId: uuid('author_id').references(() => users.id).notNull(),
    categoryId: uuid('category_id').references(() => blogCategories.id).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});

export const blogCategories = pgTable('blog_categories', {
    id: uuid('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull().unique(),
    category: blogCategoryEnum('category').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull()
});
