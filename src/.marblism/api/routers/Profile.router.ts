/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.ProfileInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.createMany(input as any))),

        create: procedure.input($Schema.ProfileInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.create(input as any))),

        deleteMany: procedure.input($Schema.ProfileInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.deleteMany(input as any))),

        delete: procedure.input($Schema.ProfileInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.delete(input as any))),

        findFirst: procedure.input($Schema.ProfileInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).profile.findFirst(input as any))),

        findMany: procedure.input($Schema.ProfileInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).profile.findMany(input as any))),

        findUnique: procedure.input($Schema.ProfileInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).profile.findUnique(input as any))),

        updateMany: procedure.input($Schema.ProfileInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.updateMany(input as any))),

        update: procedure.input($Schema.ProfileInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).profile.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ProfileCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ProfileCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProfileGetPayload<T>, Context>) => Promise<Prisma.ProfileGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ProfileDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ProfileDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProfileGetPayload<T>, Context>) => Promise<Prisma.ProfileGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ProfileFindFirstArgs, TData = Prisma.ProfileGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProfileFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProfileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProfileFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProfileFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProfileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProfileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ProfileFindManyArgs, TData = Array<Prisma.ProfileGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ProfileGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProfileFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProfileFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ProfileGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ProfileGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ProfileFindUniqueArgs, TData = Prisma.ProfileGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ProfileGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ProfileFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ProfileFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ProfileGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ProfileGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ProfileUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ProfileUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ProfileUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ProfileGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ProfileGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ProfileUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ProfileUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ProfileGetPayload<T>, Context>) => Promise<Prisma.ProfileGetPayload<T>>
            };

    };
}
