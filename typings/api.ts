/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Article {
    id: string;
    title: string;
    description: string;
    content: string;
    slug: string;
    category?: {
      id: string;
      name: string;
      slug: string;
      articles?: string[];
      seo?: string;
      posts?: string[];
      created_by?: string;
      updated_by?: string;
    };
    image: {
      id: string;
      name: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: object;
      hash: string;
      ext?: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: object;
      related?: string;
      created_by?: string;
      updated_by?: string;
    };
    author?: {
      id: string;
      name?: string;
      picture?: string;
      articles?: string[];
      email?: string;
      posts?: string[];
      created_by?: string;
      updated_by?: string;
    };
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
  
    /** @format date-time */
    published_at?: string;
  }
  
  export interface NewArticle {
    title: string;
    description: string;
    content: string;
    slug: string;
    category?: string;
    author?: string;
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
  
    /** @format date-time */
    published_at?: string;
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Book {
    id: string;
    title?: string;
    firstName?: string;
    lastName?: string;
    dateBooked?: string;
    email?: string;
    acceptTerms?: boolean;
    phoneNumber?: string;
  }
  
  export interface NewBook {
    title?: string;
    firstName?: string;
    lastName?: string;
    dateBooked?: string;
    email?: string;
    acceptTerms?: boolean;
    phoneNumber?: string;
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Bookings {
    id: string;
    firstName?: string;
    lastName?: string;
  
    /** @format date */
    dateBooked?: string;
    email?: string;
    acceptTerms?: boolean;
    title?: string;
  }
  
  export interface NewBookings {
    firstName?: string;
    lastName?: string;
  
    /** @format date */
    dateBooked?: string;
    email?: string;
    acceptTerms?: boolean;
    title?: string;
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
    articles?: {
      id: string;
      title: string;
      description: string;
      content: string;
      slug: string;
      category?: string;
      image: string;
      author?: string;
      seo?: string;
      published_at?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
    posts?: {
      id: string;
      title?: string;
      description?: string;
      content?: string;
      slug: string;
      category?: string;
      image?: string;
      writer?: string;
      seo?: string;
      created_by?: string;
      updated_by?: string;
    }[];
  }
  
  export interface NewCategory {
    name: string;
    slug: string;
    articles?: string[];
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
    posts?: string[];
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Homepage {
    id: string;
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
    hero: {
      id: string;
      title?: string;
      content?: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      boutonTitle?: string;
    };
    trademarks: {
      id: string;
      logos: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      link: string;
    }[];
    frames: {
      id: string;
      title?: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      link: string;
      content?: string;
    }[];
    frameTitle?: string;
    workTogether?: {
      id: string;
      title?: string;
      content?: string;
      image?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      boutonTitle?: string;
    };
    intro: {
      id: string;
      title: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      content?: string;
    }[];
  }
  
  export interface NewHomepage {
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
    hero: {
      id: string;
      title?: string;
      content?: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      boutonTitle?: string;
    };
    trademarks: {
      id: string;
      logos: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      link: string;
    }[];
    frames: {
      id: string;
      title?: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      link: string;
      content?: string;
    }[];
    frameTitle?: string;
    workTogether?: {
      id: string;
      title?: string;
      content?: string;
      image?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      boutonTitle?: string;
    };
    intro: {
      id: string;
      title: string;
      image: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
      content?: string;
    }[];
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Posts {
    id: string;
    title?: string;
    description?: string;
    content?: string;
    slug: string;
    category?: {
      id: string;
      name: string;
      slug: string;
      articles?: string[];
      seo?: string;
      posts?: string[];
      created_by?: string;
      updated_by?: string;
    };
    image?: {
      id: string;
      name: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: object;
      hash: string;
      ext?: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: object;
      related?: string;
      created_by?: string;
      updated_by?: string;
    };
    writer?: {
      id: string;
      name?: string;
      picture?: string;
      articles?: string[];
      email?: string;
      posts?: string[];
      created_by?: string;
      updated_by?: string;
    };
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
  }
  
  export interface NewPosts {
    title?: string;
    description?: string;
    content?: string;
    slug: string;
    category?: string;
    writer?: string;
    seo?: {
      id: string;
      metaTitle?: string;
      metaDescription?: string;
      ogTitle?: string;
      ogDescription?: string;
      ogImage?: {
        id: string;
        name: string;
        alternativeText?: string;
        caption?: string;
        width?: number;
        height?: number;
        formats?: object;
        hash: string;
        ext?: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata?: object;
        related?: string;
        created_by?: string;
        updated_by?: string;
      };
    };
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Writer {
    id: string;
    name?: string;
    picture?: {
      id: string;
      name: string;
      alternativeText?: string;
      caption?: string;
      width?: number;
      height?: number;
      formats?: object;
      hash: string;
      ext?: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: string;
      provider: string;
      provider_metadata?: object;
      related?: string;
      created_by?: string;
      updated_by?: string;
    };
    articles?: {
      id: string;
      title: string;
      description: string;
      content: string;
      slug: string;
      category?: string;
      image: string;
      author?: string;
      seo?: string;
      published_at?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    email?: string;
    posts?: {
      id: string;
      title?: string;
      description?: string;
      content?: string;
      slug: string;
      category?: string;
      image?: string;
      writer?: string;
      seo?: string;
      created_by?: string;
      updated_by?: string;
    }[];
  }
  
  export interface NewWriter {
    name?: string;
    articles?: string[];
    email?: string;
    posts?: string[];
    created_by?: string;
    updated_by?: string;
  }
  
  export interface UsersPermissionsRole {
    id: string;
    name: string;
    description?: string;
    type?: string;
    permissions?: {
      id: string;
      type: string;
      controller: string;
      action: string;
      enabled: boolean;
      policy?: string;
      role?: string;
      created_by?: string;
      updated_by?: string;
    }[];
    users?: {
      id: string;
      username: string;
      email: string;
      provider?: string;
      password?: string;
      resetPasswordToken?: string;
      confirmationToken?: string;
      confirmed?: boolean;
      blocked?: boolean;
      role?: string;
      created_by?: string;
      updated_by?: string;
    }[];
  }
  
  export interface NewUsersPermissionsRole {
    name: string;
    description?: string;
    type?: string;
    permissions?: string[];
    users?: string[];
    created_by?: string;
    updated_by?: string;
  }
  
  export interface UsersPermissionsUser {
    id: string;
    username: string;
    email: string;
    provider?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: {
      id: string;
      name: string;
      description?: string;
      type?: string;
      permissions?: string[];
      users?: string[];
      created_by?: string;
      updated_by?: string;
    };
  }
  
  export interface NewUsersPermissionsUser {
    username: string;
    email: string;
    provider?: string;
  
    /** @format password */
    password?: string;
    resetPasswordToken?: string;
    confirmationToken?: string;
    confirmed?: boolean;
    blocked?: boolean;
    role?: string;
    created_by?: string;
    updated_by?: string;
  }
  
  export interface Error {
    /** @format int32 */
    code: number;
    message: string;
  }
  
  export namespace Articles {
    /**
     * No description
     * @tags Article
     * @name ArticlesList
     * @request GET:/articles
     * @secure
     */
    export namespace ArticlesList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Article[];
    }
    /**
     * @description Create a new record
     * @tags Article
     * @name ArticlesCreate
     * @request POST:/articles
     * @secure
     */
    export namespace ArticlesCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewArticle;
      export type RequestHeaders = {};
      export type ResponseBody = Article;
    }
    /**
     * No description
     * @tags Article
     * @name CountList
     * @request GET:/articles/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * No description
     * @tags Article
     * @name ArticlesDetail
     * @request GET:/articles/{slug}
     * @secure
     */
    export namespace ArticlesDetail {
      export type RequestParams = { slug: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Article;
    }
    /**
     * @description Update a record
     * @tags Article
     * @name ArticlesUpdate
     * @request PUT:/articles/{id}
     * @secure
     */
    export namespace ArticlesUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewArticle;
      export type RequestHeaders = {};
      export type ResponseBody = Article;
    }
    /**
     * @description Delete a record
     * @tags Article
     * @name ArticlesDelete
     * @request DELETE:/articles/{id}
     * @secure
     */
    export namespace ArticlesDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Books {
    /**
     * No description
     * @tags Book
     * @name BooksList
     * @request GET:/books
     * @secure
     */
    export namespace BooksList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Book[];
    }
    /**
     * @description Create a new record
     * @tags Book
     * @name BooksCreate
     * @request POST:/books
     * @secure
     */
    export namespace BooksCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewBook;
      export type RequestHeaders = {};
      export type ResponseBody = Book;
    }
    /**
     * No description
     * @tags Book
     * @name CountList
     * @request GET:/books/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * No description
     * @tags Book
     * @name BooksDetail
     * @request GET:/books/{id}
     * @secure
     */
    export namespace BooksDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Book;
    }
    /**
     * @description Update a record
     * @tags Book
     * @name BooksUpdate
     * @request PUT:/books/{id}
     * @secure
     */
    export namespace BooksUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewBook;
      export type RequestHeaders = {};
      export type ResponseBody = Book;
    }
    /**
     * @description Delete a record
     * @tags Book
     * @name BooksDelete
     * @request DELETE:/books/{id}
     * @secure
     */
    export namespace BooksDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Bookings {
    /**
     * @description Find all the bookings's records
     * @tags Bookings
     * @name BookingsList
     * @request GET:/bookings
     * @secure
     */
    export namespace BookingsList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Bookings[];
    }
    /**
     * @description Create a new bookings record
     * @tags Bookings
     * @name BookingsCreate
     * @request POST:/bookings
     * @secure
     */
    export namespace BookingsCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewBookings;
      export type RequestHeaders = {};
      export type ResponseBody = Bookings;
    }
    /**
     * @description Retrieve the number of bookings documents
     * @tags Bookings
     * @name CountList
     * @request GET:/bookings/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * @description Find one bookings record
     * @tags Bookings
     * @name BookingsDetail
     * @request GET:/bookings/{id}
     * @secure
     */
    export namespace BookingsDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Bookings;
    }
    /**
     * @description Update a single bookings record
     * @tags Bookings
     * @name BookingsUpdate
     * @request PUT:/bookings/{id}
     * @secure
     */
    export namespace BookingsUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewBookings;
      export type RequestHeaders = {};
      export type ResponseBody = Bookings;
    }
    /**
     * @description Delete a single bookings record
     * @tags Bookings
     * @name BookingsDelete
     * @request DELETE:/bookings/{id}
     * @secure
     */
    export namespace BookingsDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Categories {
    /**
     * No description
     * @tags Category
     * @name CategoriesList
     * @request GET:/categories
     * @secure
     */
    export namespace CategoriesList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Category[];
    }
    /**
     * @description Create a new record
     * @tags Category
     * @name CategoriesCreate
     * @request POST:/categories
     * @secure
     */
    export namespace CategoriesCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewCategory;
      export type RequestHeaders = {};
      export type ResponseBody = Category;
    }
    /**
     * No description
     * @tags Category
     * @name CountList
     * @request GET:/categories/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * No description
     * @tags Category
     * @name CategoriesDetail
     * @request GET:/categories/{slug}
     * @secure
     */
    export namespace CategoriesDetail {
      export type RequestParams = { slug: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Category;
    }
    /**
     * @description Update a record
     * @tags Category
     * @name CategoriesUpdate
     * @request PUT:/categories/{id}
     * @secure
     */
    export namespace CategoriesUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewCategory;
      export type RequestHeaders = {};
      export type ResponseBody = Category;
    }
    /**
     * @description Delete a record
     * @tags Category
     * @name CategoriesDelete
     * @request DELETE:/categories/{id}
     * @secure
     */
    export namespace CategoriesDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Gites {
    /**
     * No description
     * @tags Unclassified
     * @name GitesList
     * @request GET:/gites
     * @secure
     */
    export namespace GitesList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Create a new record
     * @tags Unclassified
     * @name GitesCreate
     * @request POST:/gites
     * @secure
     */
    export namespace GitesCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = any;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * No description
     * @tags Unclassified
     * @name CountList
     * @request GET:/gites/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * No description
     * @tags Unclassified
     * @name GitesDetail
     * @request GET:/gites/{id}
     * @secure
     */
    export namespace GitesDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Update a record
     * @tags Unclassified
     * @name GitesUpdate
     * @request PUT:/gites/{id}
     * @secure
     */
    export namespace GitesUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = any;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Delete a record
     * @tags Unclassified
     * @name GitesDelete
     * @request DELETE:/gites/{id}
     * @secure
     */
    export namespace GitesDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Homepage {
    /**
     * @description Find all the homepage's records
     * @tags Homepage
     * @name HomepageList
     * @request GET:/homepage
     * @secure
     */
    export namespace HomepageList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Homepage[];
    }
    /**
     * @description Update a single homepage record
     * @tags Homepage
     * @name HomepageUpdate
     * @request PUT:/homepage
     * @secure
     */
    export namespace HomepageUpdate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewHomepage;
      export type RequestHeaders = {};
      export type ResponseBody = Homepage;
    }
    /**
     * @description Delete a single homepage record
     * @tags Homepage
     * @name HomepageDelete
     * @request DELETE:/homepage
     * @secure
     */
    export namespace HomepageDelete {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
    /**
     * No description
     * @tags Homepage
     * @name IndexList
     * @request GET:/homepage/index
     * @secure
     */
    export namespace IndexList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  export namespace Posts {
    /**
     * @description Find all the posts's records
     * @tags Posts
     * @name PostsList
     * @request GET:/posts
     * @secure
     */
    export namespace PostsList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Posts[];
    }
    /**
     * @description Create a new posts record
     * @tags Posts
     * @name PostsCreate
     * @request POST:/posts
     * @secure
     */
    export namespace PostsCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewPosts;
      export type RequestHeaders = {};
      export type ResponseBody = Posts;
    }
    /**
     * @description Retrieve the number of posts documents
     * @tags Posts
     * @name CountList
     * @request GET:/posts/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * @description Find one posts record
     * @tags Posts
     * @name PostsDetail
     * @request GET:/posts/{id}
     * @secure
     */
    export namespace PostsDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Posts;
    }
    /**
     * @description Update a single posts record
     * @tags Posts
     * @name PostsUpdate
     * @request PUT:/posts/{id}
     * @secure
     */
    export namespace PostsUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewPosts;
      export type RequestHeaders = {};
      export type ResponseBody = Posts;
    }
    /**
     * @description Delete a single posts record
     * @tags Posts
     * @name PostsDelete
     * @request DELETE:/posts/{id}
     * @secure
     */
    export namespace PostsDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Writers {
    /**
     * No description
     * @tags Writer
     * @name WritersList
     * @request GET:/writers
     * @secure
     */
    export namespace WritersList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Writer[];
    }
    /**
     * @description Create a new record
     * @tags Writer
     * @name WritersCreate
     * @request POST:/writers
     * @secure
     */
    export namespace WritersCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewWriter;
      export type RequestHeaders = {};
      export type ResponseBody = Writer;
    }
    /**
     * No description
     * @tags Writer
     * @name CountList
     * @request GET:/writers/count
     * @secure
     */
    export namespace CountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { count?: number };
    }
    /**
     * No description
     * @tags Writer
     * @name WritersDetail
     * @request GET:/writers/{id}
     * @secure
     */
    export namespace WritersDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = Writer;
    }
    /**
     * @description Update a record
     * @tags Writer
     * @name WritersUpdate
     * @request PUT:/writers/{id}
     * @secure
     */
    export namespace WritersUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewWriter;
      export type RequestHeaders = {};
      export type ResponseBody = Writer;
    }
    /**
     * @description Delete a record
     * @tags Writer
     * @name WritersDelete
     * @request DELETE:/writers/{id}
     * @secure
     */
    export namespace WritersDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = number;
    }
  }
  
  export namespace Email {
    /**
     * @description Send an email
     * @tags Email - Email
     * @name EmailCreate
     * @request POST:/email/
     * @secure
     */
    export namespace EmailCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Send an test email
     * @tags Email - Email
     * @name TestCreate
     * @request POST:/email/test
     * @secure
     */
    export namespace TestCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Get the email settings
     * @tags Email - Email
     * @name SettingsList
     * @request GET:/email/settings
     * @secure
     */
    export namespace SettingsList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  export namespace Upload {
    /**
     * @description Upload a file
     * @tags Upload - File
     * @name UploadCreate
     * @request POST:/upload/
     * @secure
     */
    export namespace UploadCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Retrieve the total number of uploaded files
     * @tags Upload - File
     * @name FilesCountList
     * @request GET:/upload/files/count
     * @secure
     */
    export namespace FilesCountList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Retrieve all file documents
     * @tags Upload - File
     * @name FilesList
     * @request GET:/upload/files
     * @secure
     */
    export namespace FilesList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Retrieve a single file depending on its id
     * @tags Upload - File
     * @name FilesDetail
     * @request GET:/upload/files/{id}
     * @secure
     */
    export namespace FilesDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Delete an uploaded file
     * @tags Upload - File
     * @name FilesDelete
     * @request DELETE:/upload/files/{id}
     * @secure
     */
    export namespace FilesDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Search for an uploaded file
     * @tags Upload - File
     * @name SearchDetail
     * @request GET:/upload/search/{id}
     * @secure
     */
    export namespace SearchDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  export namespace UsersPermissions {
    /**
     * @description Retrieve a role depending on its id
     * @tags UsersPermissions - Role
     * @name RolesDetail
     * @request GET:/users-permissions/roles/{id}
     * @secure
     */
    export namespace RolesDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsRole;
    }
    /**
     * @description Retrieve all role documents
     * @tags UsersPermissions - Role
     * @name RolesList
     * @request GET:/users-permissions/roles
     * @secure
     */
    export namespace RolesList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsRole[];
    }
    /**
     * @description Create a new role
     * @tags UsersPermissions - Role
     * @name RolesCreate
     * @request POST:/users-permissions/roles
     * @secure
     */
    export namespace RolesCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewUsersPermissionsRole;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsRole;
    }
    /**
     * @description Update a role
     * @tags UsersPermissions - Role
     * @name RolesUpdate
     * @request PUT:/users-permissions/roles/{role}
     * @secure
     */
    export namespace RolesUpdate {
      export type RequestParams = { role: string };
      export type RequestQuery = {};
      export type RequestBody = NewUsersPermissionsRole;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsRole;
    }
    /**
     * @description Delete a role
     * @tags UsersPermissions - Role
     * @name RolesDelete
     * @request DELETE:/users-permissions/roles/{role}
     * @secure
     */
    export namespace RolesDelete {
      export type RequestParams = { role: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Search for users
     * @tags UsersPermissions - User
     * @name SearchDetail
     * @request GET:/users-permissions/search/{id}
     * @secure
     */
    export namespace SearchDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser[];
    }
  }
  
  export namespace Connect {
    /**
     * @description Connect a provider
     * @tags UsersPermissions - User
     * @name GetConnect
     * @request GET:/connect/*
     * @secure
     */
    export namespace GetConnect {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  export namespace Auth {
    /**
     * @description Login a user using the identifiers email and password
     * @tags UsersPermissions - User
     * @name LocalCreate
     * @request POST:/auth/local
     * @secure
     */
    export namespace LocalCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Register a new user with the default role
     * @tags UsersPermissions - User
     * @name LocalRegisterCreate
     * @request POST:/auth/local/register
     * @secure
     */
    export namespace LocalRegisterCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = NewUsersPermissionsUser;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser;
    }
    /**
     * @description Successfull redirection after approving a provider
     * @tags UsersPermissions - User
     * @name CallbackDetail
     * @request GET:/auth/{provider}/callback
     * @secure
     */
    export namespace CallbackDetail {
      export type RequestParams = { provider: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Send the reset password email link
     * @tags UsersPermissions - User
     * @name ForgotPasswordCreate
     * @request POST:/auth/forgot-password
     * @secure
     */
    export namespace ForgotPasswordCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Reset user password with a code (resetToken)
     * @tags UsersPermissions - User
     * @name ResetPasswordCreate
     * @request POST:/auth/reset-password
     * @secure
     */
    export namespace ResetPasswordCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Validate a user account
     * @tags UsersPermissions - User
     * @name EmailConfirmationList
     * @request GET:/auth/email-confirmation
     * @secure
     */
    export namespace EmailConfirmationList {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
    /**
     * @description Send a confirmation email to user
     * @tags UsersPermissions - User
     * @name SendEmailConfirmationCreate
     * @request POST:/auth/send-email-confirmation
     * @secure
     */
    export namespace SendEmailConfirmationCreate {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = { foo?: string };
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  export namespace Users {
    /**
     * @description Retrieve all user documents
     * @tags UsersPermissions - User
     * @name UsersList
     * @request GET:/users
     * @secure
     */
    export namespace UsersList {
      export type RequestParams = {};
      export type RequestQuery = {
        _limit?: number;
        _sort?: string;
        _start?: number;
        "="?: string;
        _ne?: string;
        _lt?: string;
        _lte?: string;
        _gt?: string;
        _gte?: string;
        _contains?: string;
        _containss?: string;
        _in?: string[];
        _nin?: string[];
      };
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser[];
    }
    /**
     * @description Retrieve the logged in user information
     * @tags UsersPermissions - User
     * @name GetUsers
     * @request GET:/users/me
     * @secure
     */
    export namespace GetUsers {
      export type RequestParams = {};
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser;
    }
    /**
     * @description Retrieve a single user depending on his id
     * @tags UsersPermissions - User
     * @name UsersDetail
     * @request GET:/users/{id}
     * @secure
     */
    export namespace UsersDetail {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser;
    }
    /**
     * @description Update an existing user
     * @tags UsersPermissions - User
     * @name UsersUpdate
     * @request PUT:/users/{id}
     * @secure
     */
    export namespace UsersUpdate {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = NewUsersPermissionsUser;
      export type RequestHeaders = {};
      export type ResponseBody = UsersPermissionsUser;
    }
    /**
     * @description Delete an existing user
     * @tags UsersPermissions - User
     * @name UsersDelete
     * @request DELETE:/users/{id}
     * @secure
     */
    export namespace UsersDelete {
      export type RequestParams = { id: string };
      export type RequestQuery = {};
      export type RequestBody = never;
      export type RequestHeaders = {};
      export type ResponseBody = { foo?: string };
    }
  }
  
  import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
  
  export type QueryParamsType = Record<string | number, any>;
  
  export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
  }
  
  export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
  
  export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (
      securityData: SecurityDataType | null,
    ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
  }
  
  export enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
  }
  
  export class HttpClient<SecurityDataType = unknown> {
    public instance: AxiosInstance;
    private securityData: SecurityDataType | null = null;
    private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
    private secure?: boolean;
    private format?: ResponseType;
  
    constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
      this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "https://api.gaylordjulien.dev" });
      this.secure = secure;
      this.format = format;
      this.securityWorker = securityWorker;
    }
  
    public setSecurityData = (data: SecurityDataType | null) => {
      this.securityData = data;
    };
  
    private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
      return {
        ...this.instance.defaults,
        ...params1,
        ...(params2 || {}),
        headers: {
        },
      };
    }
  
    private createFormData(input: Record<string, unknown>): FormData {
      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData());
    }
  
    public request = async <T = any, _E = any>({
      secure,
      path,
      type,
      query,
      format,
      body,
      ...params
    }: FullRequestParams): Promise<AxiosResponse<T>> => {
      const secureParams =
        ((typeof secure === "boolean" ? secure : this.secure) &&
          this.securityWorker &&
          (await this.securityWorker(this.securityData))) ||
        {};
      const requestParams = this.mergeRequestParams(params, secureParams);
      const responseFormat = (format && this.format) || void 0;
  
      
  
      return this.instance.request({
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
          ...(requestParams.headers || {}),
        },
        params: query,
        responseType: responseFormat,
        data: body,
        url: path,
      });
    };
  }
  
  /**
   * @title DOCUMENTATION
   * @version 1.0.0
   * @license Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
   * @termsOfService YOUR_TERMS_OF_SERVICE_URL
   * @baseUrl https://api.gaylordjulien.dev
   * @externalDocs https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html
   * @contact TEAM <contact-email@something.io> (mywebsite.io)
   */
  export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    articles = {
      /**
       * No description
       *
       * @tags Article
       * @name ArticlesList
       * @request GET:/articles
       * @secure
       */
      articlesList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Article[], Error>({
          path: `/articles`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new record
       *
       * @tags Article
       * @name ArticlesCreate
       * @request POST:/articles
       * @secure
       */
      articlesCreate: (data: NewArticle, params: RequestParams = {}) =>
        this.request<Article, Error>({
          path: `/articles`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Article
       * @name CountList
       * @request GET:/articles/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/articles/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Article
       * @name ArticlesDetail
       * @request GET:/articles/{slug}
       * @secure
       */
      articlesDetail: (slug: string, params: RequestParams = {}) =>
        this.request<Article, Error>({
          path: `/articles/${slug}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a record
       *
       * @tags Article
       * @name ArticlesUpdate
       * @request PUT:/articles/{id}
       * @secure
       */
      articlesUpdate: (id: string, data: NewArticle, params: RequestParams = {}) =>
        this.request<Article, Error>({
          path: `/articles/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a record
       *
       * @tags Article
       * @name ArticlesDelete
       * @request DELETE:/articles/{id}
       * @secure
       */
      articlesDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/articles/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    books = {
      /**
       * No description
       *
       * @tags Book
       * @name BooksList
       * @request GET:/books
       * @secure
       */
      booksList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Book[], Error>({
          path: `/books`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new record
       *
       * @tags Book
       * @name BooksCreate
       * @request POST:/books
       * @secure
       */
      booksCreate: (data: NewBook, params: RequestParams = {}) =>
        this.request<Book, Error>({
          path: `/books`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Book
       * @name CountList
       * @request GET:/books/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/books/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Book
       * @name BooksDetail
       * @request GET:/books/{id}
       * @secure
       */
      booksDetail: (id: string, params: RequestParams = {}) =>
        this.request<Book, Error>({
          path: `/books/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a record
       *
       * @tags Book
       * @name BooksUpdate
       * @request PUT:/books/{id}
       * @secure
       */
      booksUpdate: (id: string, data: NewBook, params: RequestParams = {}) =>
        this.request<Book, Error>({
          path: `/books/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a record
       *
       * @tags Book
       * @name BooksDelete
       * @request DELETE:/books/{id}
       * @secure
       */
      booksDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/books/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    bookings = {
      /**
       * @description Find all the bookings's records
       *
       * @tags Bookings
       * @name BookingsList
       * @request GET:/bookings
       * @secure
       */
      bookingsList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Bookings[], Error>({
          path: `/bookings`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new bookings record
       *
       * @tags Bookings
       * @name BookingsCreate
       * @request POST:/bookings
       * @secure
       */
      bookingsCreate: (data: NewBookings, params: RequestParams = {}) =>
        this.request<Bookings, Error>({
          path: `/bookings`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve the number of bookings documents
       *
       * @tags Bookings
       * @name CountList
       * @request GET:/bookings/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/bookings/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Find one bookings record
       *
       * @tags Bookings
       * @name BookingsDetail
       * @request GET:/bookings/{id}
       * @secure
       */
      bookingsDetail: (id: string, params: RequestParams = {}) =>
        this.request<Bookings, Error>({
          path: `/bookings/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a single bookings record
       *
       * @tags Bookings
       * @name BookingsUpdate
       * @request PUT:/bookings/{id}
       * @secure
       */
      bookingsUpdate: (id: string, data: NewBookings, params: RequestParams = {}) =>
        this.request<Bookings, Error>({
          path: `/bookings/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a single bookings record
       *
       * @tags Bookings
       * @name BookingsDelete
       * @request DELETE:/bookings/{id}
       * @secure
       */
      bookingsDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/bookings/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    categories = {
      /**
       * No description
       *
       * @tags Category
       * @name CategoriesList
       * @request GET:/categories
       * @secure
       */
      categoriesList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Category[], Error>({
          path: `/categories`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new record
       *
       * @tags Category
       * @name CategoriesCreate
       * @request POST:/categories
       * @secure
       */
      categoriesCreate: (data: NewCategory, params: RequestParams = {}) =>
        this.request<Category, Error>({
          path: `/categories`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Category
       * @name CountList
       * @request GET:/categories/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/categories/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Category
       * @name CategoriesDetail
       * @request GET:/categories/{slug}
       * @secure
       */
      categoriesDetail: (slug: string, params: RequestParams = {}) =>
        this.request<Category, Error>({
          path: `/categories/${slug}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a record
       *
       * @tags Category
       * @name CategoriesUpdate
       * @request PUT:/categories/{id}
       * @secure
       */
      categoriesUpdate: (id: string, data: NewCategory, params: RequestParams = {}) =>
        this.request<Category, Error>({
          path: `/categories/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a record
       *
       * @tags Category
       * @name CategoriesDelete
       * @request DELETE:/categories/{id}
       * @secure
       */
      categoriesDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/categories/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    gites = {
      /**
       * No description
       *
       * @tags Unclassified
       * @name GitesList
       * @request GET:/gites
       * @secure
       */
      gitesList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<{ foo?: string }, Error>({
          path: `/gites`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new record
       *
       * @tags Unclassified
       * @name GitesCreate
       * @request POST:/gites
       * @secure
       */
      gitesCreate: (data: any, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/gites`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Unclassified
       * @name CountList
       * @request GET:/gites/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/gites/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Unclassified
       * @name GitesDetail
       * @request GET:/gites/{id}
       * @secure
       */
      gitesDetail: (id: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/gites/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a record
       *
       * @tags Unclassified
       * @name GitesUpdate
       * @request PUT:/gites/{id}
       * @secure
       */
      gitesUpdate: (id: string, data: any, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/gites/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a record
       *
       * @tags Unclassified
       * @name GitesDelete
       * @request DELETE:/gites/{id}
       * @secure
       */
      gitesDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/gites/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    homepage = {
      /**
       * @description Find all the homepage's records
       *
       * @tags Homepage
       * @name HomepageList
       * @request GET:/homepage
       * @secure
       */
      homepageList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Homepage[], Error>({
          path: `/homepage`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a single homepage record
       *
       * @tags Homepage
       * @name HomepageUpdate
       * @request PUT:/homepage
       * @secure
       */
      homepageUpdate: (data: NewHomepage, params: RequestParams = {}) =>
        this.request<Homepage, Error>({
          path: `/homepage`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a single homepage record
       *
       * @tags Homepage
       * @name HomepageDelete
       * @request DELETE:/homepage
       * @secure
       */
      homepageDelete: (params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/homepage`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Homepage
       * @name IndexList
       * @request GET:/homepage/index
       * @secure
       */
      indexList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/homepage/index`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    posts = {
      /**
       * @description Find all the posts's records
       *
       * @tags Posts
       * @name PostsList
       * @request GET:/posts
       * @secure
       */
      postsList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Posts[], Error>({
          path: `/posts`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new posts record
       *
       * @tags Posts
       * @name PostsCreate
       * @request POST:/posts
       * @secure
       */
      postsCreate: (data: NewPosts, params: RequestParams = {}) =>
        this.request<Posts, Error>({
          path: `/posts`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve the number of posts documents
       *
       * @tags Posts
       * @name CountList
       * @request GET:/posts/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/posts/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Find one posts record
       *
       * @tags Posts
       * @name PostsDetail
       * @request GET:/posts/{id}
       * @secure
       */
      postsDetail: (id: string, params: RequestParams = {}) =>
        this.request<Posts, Error>({
          path: `/posts/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a single posts record
       *
       * @tags Posts
       * @name PostsUpdate
       * @request PUT:/posts/{id}
       * @secure
       */
      postsUpdate: (id: string, data: NewPosts, params: RequestParams = {}) =>
        this.request<Posts, Error>({
          path: `/posts/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a single posts record
       *
       * @tags Posts
       * @name PostsDelete
       * @request DELETE:/posts/{id}
       * @secure
       */
      postsDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/posts/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    writers = {
      /**
       * No description
       *
       * @tags Writer
       * @name WritersList
       * @request GET:/writers
       * @secure
       */
      writersList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<Writer[], Error>({
          path: `/writers`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new record
       *
       * @tags Writer
       * @name WritersCreate
       * @request POST:/writers
       * @secure
       */
      writersCreate: (data: NewWriter, params: RequestParams = {}) =>
        this.request<Writer, Error>({
          path: `/writers`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Writer
       * @name CountList
       * @request GET:/writers/count
       * @secure
       */
      countList: (params: RequestParams = {}) =>
        this.request<{ count?: number }, Error>({
          path: `/writers/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * No description
       *
       * @tags Writer
       * @name WritersDetail
       * @request GET:/writers/{id}
       * @secure
       */
      writersDetail: (id: string, params: RequestParams = {}) =>
        this.request<Writer, Error>({
          path: `/writers/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a record
       *
       * @tags Writer
       * @name WritersUpdate
       * @request PUT:/writers/{id}
       * @secure
       */
      writersUpdate: (id: string, data: NewWriter, params: RequestParams = {}) =>
        this.request<Writer, Error>({
          path: `/writers/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a record
       *
       * @tags Writer
       * @name WritersDelete
       * @request DELETE:/writers/{id}
       * @secure
       */
      writersDelete: (id: string, params: RequestParams = {}) =>
        this.request<number, Error>({
          path: `/writers/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    email = {
      /**
       * @description Send an email
       *
       * @tags Email - Email
       * @name EmailCreate
       * @request POST:/email/
       * @secure
       */
      emailCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/email/`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Send an test email
       *
       * @tags Email - Email
       * @name TestCreate
       * @request POST:/email/test
       * @secure
       */
      testCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/email/test`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Get the email settings
       *
       * @tags Email - Email
       * @name SettingsList
       * @request GET:/email/settings
       * @secure
       */
      settingsList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/email/settings`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    upload = {
      /**
       * @description Upload a file
       *
       * @tags Upload - File
       * @name UploadCreate
       * @request POST:/upload/
       * @secure
       */
      uploadCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve the total number of uploaded files
       *
       * @tags Upload - File
       * @name FilesCountList
       * @request GET:/upload/files/count
       * @secure
       */
      filesCountList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/files/count`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve all file documents
       *
       * @tags Upload - File
       * @name FilesList
       * @request GET:/upload/files
       * @secure
       */
      filesList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/files`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve a single file depending on its id
       *
       * @tags Upload - File
       * @name FilesDetail
       * @request GET:/upload/files/{id}
       * @secure
       */
      filesDetail: (id: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/files/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete an uploaded file
       *
       * @tags Upload - File
       * @name FilesDelete
       * @request DELETE:/upload/files/{id}
       * @secure
       */
      filesDelete: (id: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/files/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Search for an uploaded file
       *
       * @tags Upload - File
       * @name SearchDetail
       * @request GET:/upload/search/{id}
       * @secure
       */
      searchDetail: (id: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/upload/search/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    usersPermissions = {
      /**
       * @description Retrieve a role depending on its id
       *
       * @tags UsersPermissions - Role
       * @name RolesDetail
       * @request GET:/users-permissions/roles/{id}
       * @secure
       */
      rolesDetail: (id: string, params: RequestParams = {}) =>
        this.request<UsersPermissionsRole, Error>({
          path: `/users-permissions/roles/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve all role documents
       *
       * @tags UsersPermissions - Role
       * @name RolesList
       * @request GET:/users-permissions/roles
       * @secure
       */
      rolesList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<UsersPermissionsRole[], Error>({
          path: `/users-permissions/roles`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Create a new role
       *
       * @tags UsersPermissions - Role
       * @name RolesCreate
       * @request POST:/users-permissions/roles
       * @secure
       */
      rolesCreate: (data: NewUsersPermissionsRole, params: RequestParams = {}) =>
        this.request<UsersPermissionsRole, Error>({
          path: `/users-permissions/roles`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update a role
       *
       * @tags UsersPermissions - Role
       * @name RolesUpdate
       * @request PUT:/users-permissions/roles/{role}
       * @secure
       */
      rolesUpdate: (role: string, data: NewUsersPermissionsRole, params: RequestParams = {}) =>
        this.request<UsersPermissionsRole, Error>({
          path: `/users-permissions/roles/${role}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete a role
       *
       * @tags UsersPermissions - Role
       * @name RolesDelete
       * @request DELETE:/users-permissions/roles/{role}
       * @secure
       */
      rolesDelete: (role: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/users-permissions/roles/${role}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Search for users
       *
       * @tags UsersPermissions - User
       * @name SearchDetail
       * @request GET:/users-permissions/search/{id}
       * @secure
       */
      searchDetail: (
        id: string,
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<UsersPermissionsUser[], Error>({
          path: `/users-permissions/search/${id}`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
    };
    connect = {
      /**
       * @description Connect a provider
       *
       * @tags UsersPermissions - User
       * @name GetConnect
       * @request GET:/connect/*
       * @secure
       */
      getConnect: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/connect/*`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
    };
    auth = {
      /**
       * @description Login a user using the identifiers email and password
       *
       * @tags UsersPermissions - User
       * @name LocalCreate
       * @request POST:/auth/local
       * @secure
       */
      localCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/local`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Register a new user with the default role
       *
       * @tags UsersPermissions - User
       * @name LocalRegisterCreate
       * @request POST:/auth/local/register
       * @secure
       */
      localRegisterCreate: (data: NewUsersPermissionsUser, params: RequestParams = {}) =>
        this.request<UsersPermissionsUser, Error>({
          path: `/auth/local/register`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Successfull redirection after approving a provider
       *
       * @tags UsersPermissions - User
       * @name CallbackDetail
       * @request GET:/auth/{provider}/callback
       * @secure
       */
      callbackDetail: (provider: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/${provider}/callback`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Send the reset password email link
       *
       * @tags UsersPermissions - User
       * @name ForgotPasswordCreate
       * @request POST:/auth/forgot-password
       * @secure
       */
      forgotPasswordCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/forgot-password`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Reset user password with a code (resetToken)
       *
       * @tags UsersPermissions - User
       * @name ResetPasswordCreate
       * @request POST:/auth/reset-password
       * @secure
       */
      resetPasswordCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/reset-password`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Validate a user account
       *
       * @tags UsersPermissions - User
       * @name EmailConfirmationList
       * @request GET:/auth/email-confirmation
       * @secure
       */
      emailConfirmationList: (params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/email-confirmation`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Send a confirmation email to user
       *
       * @tags UsersPermissions - User
       * @name SendEmailConfirmationCreate
       * @request POST:/auth/send-email-confirmation
       * @secure
       */
      sendEmailConfirmationCreate: (data: { foo?: string }, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/auth/send-email-confirmation`,
          method: "POST",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
    };
    users = {
      /**
       * @description Retrieve all user documents
       *
       * @tags UsersPermissions - User
       * @name UsersList
       * @request GET:/users
       * @secure
       */
      usersList: (
        query?: {
          _limit?: number;
          _sort?: string;
          _start?: number;
          "="?: string;
          _ne?: string;
          _lt?: string;
          _lte?: string;
          _gt?: string;
          _gte?: string;
          _contains?: string;
          _containss?: string;
          _in?: string[];
          _nin?: string[];
        },
        params: RequestParams = {},
      ) =>
        this.request<UsersPermissionsUser[], Error>({
          path: `/users`,
          method: "GET",
          query: query,
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve the logged in user information
       *
       * @tags UsersPermissions - User
       * @name GetUsers
       * @request GET:/users/me
       * @secure
       */
      getUsers: (params: RequestParams = {}) =>
        this.request<UsersPermissionsUser, Error>({
          path: `/users/me`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Retrieve a single user depending on his id
       *
       * @tags UsersPermissions - User
       * @name UsersDetail
       * @request GET:/users/{id}
       * @secure
       */
      usersDetail: (id: string, params: RequestParams = {}) =>
        this.request<UsersPermissionsUser, Error>({
          path: `/users/${id}`,
          method: "GET",
          secure: true,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Update an existing user
       *
       * @tags UsersPermissions - User
       * @name UsersUpdate
       * @request PUT:/users/{id}
       * @secure
       */
      usersUpdate: (id: string, data: NewUsersPermissionsUser, params: RequestParams = {}) =>
        this.request<UsersPermissionsUser, Error>({
          path: `/users/${id}`,
          method: "PUT",
          body: data,
          secure: true,
          type: ContentType.Json,
          format: "json",
          ...params,
        }),
  
      /**
       * @description Delete an existing user
       *
       * @tags UsersPermissions - User
       * @name UsersDelete
       * @request DELETE:/users/{id}
       * @secure
       */
      usersDelete: (id: string, params: RequestParams = {}) =>
        this.request<{ foo?: string }, Error>({
          path: `/users/${id}`,
          method: "DELETE",
          secure: true,
          format: "json",
          ...params,
        }),
    };
  }
  