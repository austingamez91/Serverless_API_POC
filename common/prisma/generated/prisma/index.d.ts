/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model CarMake
 *
 */
export type CarMake = $Result.DefaultSelection<Prisma.$CarMakePayload>;
/**
 * Model CarModel
 *
 */
export type CarModel = $Result.DefaultSelection<Prisma.$CarModelPayload>;
/**
 * Model CarPart
 *
 */
export type CarPart = $Result.DefaultSelection<Prisma.$CarPartPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CarMakes
 * const carMakes = await prisma.carMake.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CarMakes
   * const carMakes = await prisma.carMake.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.carMake`: Exposes CRUD operations for the **CarMake** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CarMakes
   * const carMakes = await prisma.carMake.findMany()
   * ```
   */
  get carMake(): Prisma.CarMakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carModel`: Exposes CRUD operations for the **CarModel** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CarModels
   * const carModels = await prisma.carModel.findMany()
   * ```
   */
  get carModel(): Prisma.CarModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carPart`: Exposes CRUD operations for the **CarPart** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more CarParts
   * const carParts = await prisma.carPart.findMany()
   * ```
   */
  get carPart(): Prisma.CarPartDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.10.0
   * Query Engine version: aee10d5a411e4360c6d3445ce4810ca65adbf3e8
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    CarMake: "CarMake";
    CarModel: "CarModel";
    CarPart: "CarPart";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "carMake" | "carModel" | "carPart";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      CarMake: {
        payload: Prisma.$CarMakePayload<ExtArgs>;
        fields: Prisma.CarMakeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarMakeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarMakeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          findFirst: {
            args: Prisma.CarMakeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarMakeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          findMany: {
            args: Prisma.CarMakeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[];
          };
          create: {
            args: Prisma.CarMakeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          createMany: {
            args: Prisma.CarMakeCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarMakeCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[];
          };
          delete: {
            args: Prisma.CarMakeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          update: {
            args: Prisma.CarMakeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          deleteMany: {
            args: Prisma.CarMakeDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarMakeUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarMakeUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>[];
          };
          upsert: {
            args: Prisma.CarMakeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarMakePayload>;
          };
          aggregate: {
            args: Prisma.CarMakeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCarMake>;
          };
          groupBy: {
            args: Prisma.CarMakeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarMakeGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarMakeCountArgs<ExtArgs>;
            result: $Utils.Optional<CarMakeCountAggregateOutputType> | number;
          };
        };
      };
      CarModel: {
        payload: Prisma.$CarModelPayload<ExtArgs>;
        fields: Prisma.CarModelFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarModelFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarModelFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          findFirst: {
            args: Prisma.CarModelFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarModelFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          findMany: {
            args: Prisma.CarModelFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[];
          };
          create: {
            args: Prisma.CarModelCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          createMany: {
            args: Prisma.CarModelCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarModelCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[];
          };
          delete: {
            args: Prisma.CarModelDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          update: {
            args: Prisma.CarModelUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          deleteMany: {
            args: Prisma.CarModelDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarModelUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarModelUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>[];
          };
          upsert: {
            args: Prisma.CarModelUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarModelPayload>;
          };
          aggregate: {
            args: Prisma.CarModelAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCarModel>;
          };
          groupBy: {
            args: Prisma.CarModelGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarModelGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarModelCountArgs<ExtArgs>;
            result: $Utils.Optional<CarModelCountAggregateOutputType> | number;
          };
        };
      };
      CarPart: {
        payload: Prisma.$CarPartPayload<ExtArgs>;
        fields: Prisma.CarPartFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CarPartFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CarPartFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          findFirst: {
            args: Prisma.CarPartFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CarPartFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          findMany: {
            args: Prisma.CarPartFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>[];
          };
          create: {
            args: Prisma.CarPartCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          createMany: {
            args: Prisma.CarPartCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CarPartCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>[];
          };
          delete: {
            args: Prisma.CarPartDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          update: {
            args: Prisma.CarPartUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          deleteMany: {
            args: Prisma.CarPartDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CarPartUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CarPartUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>[];
          };
          upsert: {
            args: Prisma.CarPartUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CarPartPayload>;
          };
          aggregate: {
            args: Prisma.CarPartAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCarPart>;
          };
          groupBy: {
            args: Prisma.CarPartGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CarPartGroupByOutputType>[];
          };
          count: {
            args: Prisma.CarPartCountArgs<ExtArgs>;
            result: $Utils.Optional<CarPartCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    carMake?: CarMakeOmit;
    carModel?: CarModelOmit;
    carPart?: CarPartOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CarMakeCountOutputType
   */

  export type CarMakeCountOutputType = {
    models: number;
  };

  export type CarMakeCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    models?: boolean | CarMakeCountOutputTypeCountModelsArgs;
  };

  // Custom InputTypes
  /**
   * CarMakeCountOutputType without action
   */
  export type CarMakeCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMakeCountOutputType
     */
    select?: CarMakeCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarMakeCountOutputType without action
   */
  export type CarMakeCountOutputTypeCountModelsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarModelWhereInput;
  };

  /**
   * Count Type CarModelCountOutputType
   */

  export type CarModelCountOutputType = {
    parts: number;
  };

  export type CarModelCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    parts?: boolean | CarModelCountOutputTypeCountPartsArgs;
  };

  // Custom InputTypes
  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModelCountOutputType
     */
    select?: CarModelCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CarModelCountOutputType without action
   */
  export type CarModelCountOutputTypeCountPartsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarPartWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model CarMake
   */

  export type AggregateCarMake = {
    _count: CarMakeCountAggregateOutputType | null;
    _avg: CarMakeAvgAggregateOutputType | null;
    _sum: CarMakeSumAggregateOutputType | null;
    _min: CarMakeMinAggregateOutputType | null;
    _max: CarMakeMaxAggregateOutputType | null;
  };

  export type CarMakeAvgAggregateOutputType = {
    id: number | null;
  };

  export type CarMakeSumAggregateOutputType = {
    id: number | null;
  };

  export type CarMakeMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarMakeMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarMakeCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CarMakeAvgAggregateInputType = {
    id?: true;
  };

  export type CarMakeSumAggregateInputType = {
    id?: true;
  };

  export type CarMakeMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarMakeMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarMakeCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CarMakeAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarMake to aggregate.
     */
    where?: CarMakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarMakes to fetch.
     */
    orderBy?:
      | CarMakeOrderByWithRelationInput
      | CarMakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CarMakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarMakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CarMakes
     **/
    _count?: true | CarMakeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarMakeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarMakeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarMakeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarMakeMaxAggregateInputType;
  };

  export type GetCarMakeAggregateType<T extends CarMakeAggregateArgs> = {
    [P in keyof T & keyof AggregateCarMake]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarMake[P]>
      : GetScalarType<T[P], AggregateCarMake[P]>;
  };

  export type CarMakeGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarMakeWhereInput;
    orderBy?:
      | CarMakeOrderByWithAggregationInput
      | CarMakeOrderByWithAggregationInput[];
    by: CarMakeScalarFieldEnum[] | CarMakeScalarFieldEnum;
    having?: CarMakeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarMakeCountAggregateInputType | true;
    _avg?: CarMakeAvgAggregateInputType;
    _sum?: CarMakeSumAggregateInputType;
    _min?: CarMakeMinAggregateInputType;
    _max?: CarMakeMaxAggregateInputType;
  };

  export type CarMakeGroupByOutputType = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CarMakeCountAggregateOutputType | null;
    _avg: CarMakeAvgAggregateOutputType | null;
    _sum: CarMakeSumAggregateOutputType | null;
    _min: CarMakeMinAggregateOutputType | null;
    _max: CarMakeMaxAggregateOutputType | null;
  };

  type GetCarMakeGroupByPayload<T extends CarMakeGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CarMakeGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CarMakeGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarMakeGroupByOutputType[P]>
            : GetScalarType<T[P], CarMakeGroupByOutputType[P]>;
        }
      >
    >;

  export type CarMakeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      models?: boolean | CarMake$modelsArgs<ExtArgs>;
      _count?: boolean | CarMakeCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carMake"]
  >;

  export type CarMakeSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["carMake"]
  >;

  export type CarMakeSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs["result"]["carMake"]
  >;

  export type CarMakeSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CarMakeOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "createdAt" | "updatedAt",
    ExtArgs["result"]["carMake"]
  >;
  export type CarMakeInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    models?: boolean | CarMake$modelsArgs<ExtArgs>;
    _count?: boolean | CarMakeCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CarMakeIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type CarMakeIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $CarMakePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CarMake";
    objects: {
      models: Prisma.$CarModelPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["carMake"]
    >;
    composites: {};
  };

  type CarMakeGetPayload<
    S extends boolean | null | undefined | CarMakeDefaultArgs,
  > = $Result.GetResult<Prisma.$CarMakePayload, S>;

  type CarMakeCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CarMakeFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CarMakeCountAggregateInputType | true;
  };

  export interface CarMakeDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CarMake"];
      meta: { name: "CarMake" };
    };
    /**
     * Find zero or one CarMake that matches the filter.
     * @param {CarMakeFindUniqueArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarMakeFindUniqueArgs>(
      args: SelectSubset<T, CarMakeFindUniqueArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CarMake that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarMakeFindUniqueOrThrowArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarMakeFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarMakeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarMake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindFirstArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarMakeFindFirstArgs>(
      args?: SelectSubset<T, CarMakeFindFirstArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarMake that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindFirstOrThrowArgs} args - Arguments to find a CarMake
     * @example
     * // Get one CarMake
     * const carMake = await prisma.carMake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarMakeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarMakeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CarMakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarMakes
     * const carMakes = await prisma.carMake.findMany()
     *
     * // Get first 10 CarMakes
     * const carMakes = await prisma.carMake.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carMakeWithIdOnly = await prisma.carMake.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarMakeFindManyArgs>(
      args?: SelectSubset<T, CarMakeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CarMake.
     * @param {CarMakeCreateArgs} args - Arguments to create a CarMake.
     * @example
     * // Create one CarMake
     * const CarMake = await prisma.carMake.create({
     *   data: {
     *     // ... data to create a CarMake
     *   }
     * })
     *
     */
    create<T extends CarMakeCreateArgs>(
      args: SelectSubset<T, CarMakeCreateArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CarMakes.
     * @param {CarMakeCreateManyArgs} args - Arguments to create many CarMakes.
     * @example
     * // Create many CarMakes
     * const carMake = await prisma.carMake.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarMakeCreateManyArgs>(
      args?: SelectSubset<T, CarMakeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CarMakes and returns the data saved in the database.
     * @param {CarMakeCreateManyAndReturnArgs} args - Arguments to create many CarMakes.
     * @example
     * // Create many CarMakes
     * const carMake = await prisma.carMake.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CarMakes and only return the `id`
     * const carMakeWithIdOnly = await prisma.carMake.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarMakeCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarMakeCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CarMake.
     * @param {CarMakeDeleteArgs} args - Arguments to delete one CarMake.
     * @example
     * // Delete one CarMake
     * const CarMake = await prisma.carMake.delete({
     *   where: {
     *     // ... filter to delete one CarMake
     *   }
     * })
     *
     */
    delete<T extends CarMakeDeleteArgs>(
      args: SelectSubset<T, CarMakeDeleteArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CarMake.
     * @param {CarMakeUpdateArgs} args - Arguments to update one CarMake.
     * @example
     * // Update one CarMake
     * const carMake = await prisma.carMake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarMakeUpdateArgs>(
      args: SelectSubset<T, CarMakeUpdateArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CarMakes.
     * @param {CarMakeDeleteManyArgs} args - Arguments to filter CarMakes to delete.
     * @example
     * // Delete a few CarMakes
     * const { count } = await prisma.carMake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarMakeDeleteManyArgs>(
      args?: SelectSubset<T, CarMakeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarMakes
     * const carMake = await prisma.carMake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarMakeUpdateManyArgs>(
      args: SelectSubset<T, CarMakeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarMakes and returns the data updated in the database.
     * @param {CarMakeUpdateManyAndReturnArgs} args - Arguments to update many CarMakes.
     * @example
     * // Update many CarMakes
     * const carMake = await prisma.carMake.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CarMakes and only return the `id`
     * const carMakeWithIdOnly = await prisma.carMake.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CarMakeUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarMakeUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CarMake.
     * @param {CarMakeUpsertArgs} args - Arguments to update or create a CarMake.
     * @example
     * // Update or create a CarMake
     * const carMake = await prisma.carMake.upsert({
     *   create: {
     *     // ... data to create a CarMake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarMake we want to update
     *   }
     * })
     */
    upsert<T extends CarMakeUpsertArgs>(
      args: SelectSubset<T, CarMakeUpsertArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      $Result.GetResult<
        Prisma.$CarMakePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CarMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeCountArgs} args - Arguments to filter CarMakes to count.
     * @example
     * // Count the number of CarMakes
     * const count = await prisma.carMake.count({
     *   where: {
     *     // ... the filter for the CarMakes we want to count
     *   }
     * })
     **/
    count<T extends CarMakeCountArgs>(
      args?: Subset<T, CarMakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CarMakeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CarMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarMakeAggregateArgs>(
      args: Subset<T, CarMakeAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarMakeAggregateType<T>>;

    /**
     * Group by CarMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarMakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CarMakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarMakeGroupByArgs["orderBy"] }
        : { orderBy?: CarMakeGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CarMakeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCarMakeGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CarMake model
     */
    readonly fields: CarMakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarMake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarMakeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    models<T extends CarMake$modelsArgs<ExtArgs> = {}>(
      args?: Subset<T, CarMake$modelsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CarModelPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CarMake model
   */
  interface CarMakeFieldRefs {
    readonly id: FieldRef<"CarMake", "Int">;
    readonly name: FieldRef<"CarMake", "String">;
    readonly createdAt: FieldRef<"CarMake", "DateTime">;
    readonly updatedAt: FieldRef<"CarMake", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CarMake findUnique
   */
  export type CarMakeFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter, which CarMake to fetch.
     */
    where: CarMakeWhereUniqueInput;
  };

  /**
   * CarMake findUniqueOrThrow
   */
  export type CarMakeFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter, which CarMake to fetch.
     */
    where: CarMakeWhereUniqueInput;
  };

  /**
   * CarMake findFirst
   */
  export type CarMakeFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter, which CarMake to fetch.
     */
    where?: CarMakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarMakes to fetch.
     */
    orderBy?:
      | CarMakeOrderByWithRelationInput
      | CarMakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarMakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarMakes.
     */
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[];
  };

  /**
   * CarMake findFirstOrThrow
   */
  export type CarMakeFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter, which CarMake to fetch.
     */
    where?: CarMakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarMakes to fetch.
     */
    orderBy?:
      | CarMakeOrderByWithRelationInput
      | CarMakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarMakes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarMakes.
     */
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[];
  };

  /**
   * CarMake findMany
   */
  export type CarMakeFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter, which CarMakes to fetch.
     */
    where?: CarMakeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarMakes to fetch.
     */
    orderBy?:
      | CarMakeOrderByWithRelationInput
      | CarMakeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CarMakes.
     */
    cursor?: CarMakeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarMakes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarMakes.
     */
    skip?: number;
    distinct?: CarMakeScalarFieldEnum | CarMakeScalarFieldEnum[];
  };

  /**
   * CarMake create
   */
  export type CarMakeCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * The data needed to create a CarMake.
     */
    data: XOR<CarMakeCreateInput, CarMakeUncheckedCreateInput>;
  };

  /**
   * CarMake createMany
   */
  export type CarMakeCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CarMakes.
     */
    data: CarMakeCreateManyInput | CarMakeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarMake createManyAndReturn
   */
  export type CarMakeCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * The data used to create many CarMakes.
     */
    data: CarMakeCreateManyInput | CarMakeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarMake update
   */
  export type CarMakeUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * The data needed to update a CarMake.
     */
    data: XOR<CarMakeUpdateInput, CarMakeUncheckedUpdateInput>;
    /**
     * Choose, which CarMake to update.
     */
    where: CarMakeWhereUniqueInput;
  };

  /**
   * CarMake updateMany
   */
  export type CarMakeUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CarMakes.
     */
    data: XOR<CarMakeUpdateManyMutationInput, CarMakeUncheckedUpdateManyInput>;
    /**
     * Filter which CarMakes to update
     */
    where?: CarMakeWhereInput;
    /**
     * Limit how many CarMakes to update.
     */
    limit?: number;
  };

  /**
   * CarMake updateManyAndReturn
   */
  export type CarMakeUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * The data used to update CarMakes.
     */
    data: XOR<CarMakeUpdateManyMutationInput, CarMakeUncheckedUpdateManyInput>;
    /**
     * Filter which CarMakes to update
     */
    where?: CarMakeWhereInput;
    /**
     * Limit how many CarMakes to update.
     */
    limit?: number;
  };

  /**
   * CarMake upsert
   */
  export type CarMakeUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * The filter to search for the CarMake to update in case it exists.
     */
    where: CarMakeWhereUniqueInput;
    /**
     * In case the CarMake found by the `where` argument doesn't exist, create a new CarMake with this data.
     */
    create: XOR<CarMakeCreateInput, CarMakeUncheckedCreateInput>;
    /**
     * In case the CarMake was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarMakeUpdateInput, CarMakeUncheckedUpdateInput>;
  };

  /**
   * CarMake delete
   */
  export type CarMakeDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
    /**
     * Filter which CarMake to delete.
     */
    where: CarMakeWhereUniqueInput;
  };

  /**
   * CarMake deleteMany
   */
  export type CarMakeDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarMakes to delete
     */
    where?: CarMakeWhereInput;
    /**
     * Limit how many CarMakes to delete.
     */
    limit?: number;
  };

  /**
   * CarMake.models
   */
  export type CarMake$modelsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    where?: CarModelWhereInput;
    orderBy?:
      | CarModelOrderByWithRelationInput
      | CarModelOrderByWithRelationInput[];
    cursor?: CarModelWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[];
  };

  /**
   * CarMake without action
   */
  export type CarMakeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarMake
     */
    select?: CarMakeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarMake
     */
    omit?: CarMakeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarMakeInclude<ExtArgs> | null;
  };

  /**
   * Model CarModel
   */

  export type AggregateCarModel = {
    _count: CarModelCountAggregateOutputType | null;
    _avg: CarModelAvgAggregateOutputType | null;
    _sum: CarModelSumAggregateOutputType | null;
    _min: CarModelMinAggregateOutputType | null;
    _max: CarModelMaxAggregateOutputType | null;
  };

  export type CarModelAvgAggregateOutputType = {
    id: number | null;
    makeId: number | null;
  };

  export type CarModelSumAggregateOutputType = {
    id: number | null;
    makeId: number | null;
  };

  export type CarModelMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    makeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarModelMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    makeId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarModelCountAggregateOutputType = {
    id: number;
    name: number;
    makeId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CarModelAvgAggregateInputType = {
    id?: true;
    makeId?: true;
  };

  export type CarModelSumAggregateInputType = {
    id?: true;
    makeId?: true;
  };

  export type CarModelMinAggregateInputType = {
    id?: true;
    name?: true;
    makeId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarModelMaxAggregateInputType = {
    id?: true;
    name?: true;
    makeId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarModelCountAggregateInputType = {
    id?: true;
    name?: true;
    makeId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CarModelAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarModel to aggregate.
     */
    where?: CarModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarModels to fetch.
     */
    orderBy?:
      | CarModelOrderByWithRelationInput
      | CarModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CarModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CarModels
     **/
    _count?: true | CarModelCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarModelAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarModelSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarModelMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarModelMaxAggregateInputType;
  };

  export type GetCarModelAggregateType<T extends CarModelAggregateArgs> = {
    [P in keyof T & keyof AggregateCarModel]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarModel[P]>
      : GetScalarType<T[P], AggregateCarModel[P]>;
  };

  export type CarModelGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarModelWhereInput;
    orderBy?:
      | CarModelOrderByWithAggregationInput
      | CarModelOrderByWithAggregationInput[];
    by: CarModelScalarFieldEnum[] | CarModelScalarFieldEnum;
    having?: CarModelScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarModelCountAggregateInputType | true;
    _avg?: CarModelAvgAggregateInputType;
    _sum?: CarModelSumAggregateInputType;
    _min?: CarModelMinAggregateInputType;
    _max?: CarModelMaxAggregateInputType;
  };

  export type CarModelGroupByOutputType = {
    id: number;
    name: string;
    makeId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CarModelCountAggregateOutputType | null;
    _avg: CarModelAvgAggregateOutputType | null;
    _sum: CarModelSumAggregateOutputType | null;
    _min: CarModelMinAggregateOutputType | null;
    _max: CarModelMaxAggregateOutputType | null;
  };

  type GetCarModelGroupByPayload<T extends CarModelGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CarModelGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CarModelGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarModelGroupByOutputType[P]>
            : GetScalarType<T[P], CarModelGroupByOutputType[P]>;
        }
      >
    >;

  export type CarModelSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      makeId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      make?: boolean | CarMakeDefaultArgs<ExtArgs>;
      parts?: boolean | CarModel$partsArgs<ExtArgs>;
      _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carModel"]
  >;

  export type CarModelSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      makeId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      make?: boolean | CarMakeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carModel"]
  >;

  export type CarModelSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      makeId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      make?: boolean | CarMakeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carModel"]
  >;

  export type CarModelSelectScalar = {
    id?: boolean;
    name?: boolean;
    makeId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CarModelOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "makeId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["carModel"]
  >;
  export type CarModelInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>;
    parts?: boolean | CarModel$partsArgs<ExtArgs>;
    _count?: boolean | CarModelCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CarModelIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>;
  };
  export type CarModelIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    make?: boolean | CarMakeDefaultArgs<ExtArgs>;
  };

  export type $CarModelPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CarModel";
    objects: {
      make: Prisma.$CarMakePayload<ExtArgs>;
      parts: Prisma.$CarPartPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        makeId: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["carModel"]
    >;
    composites: {};
  };

  type CarModelGetPayload<
    S extends boolean | null | undefined | CarModelDefaultArgs,
  > = $Result.GetResult<Prisma.$CarModelPayload, S>;

  type CarModelCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CarModelFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CarModelCountAggregateInputType | true;
  };

  export interface CarModelDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CarModel"];
      meta: { name: "CarModel" };
    };
    /**
     * Find zero or one CarModel that matches the filter.
     * @param {CarModelFindUniqueArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarModelFindUniqueArgs>(
      args: SelectSubset<T, CarModelFindUniqueArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CarModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarModelFindUniqueOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarModelFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarModelFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarModelFindFirstArgs>(
      args?: SelectSubset<T, CarModelFindFirstArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindFirstOrThrowArgs} args - Arguments to find a CarModel
     * @example
     * // Get one CarModel
     * const carModel = await prisma.carModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarModelFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CarModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarModels
     * const carModels = await prisma.carModel.findMany()
     *
     * // Get first 10 CarModels
     * const carModels = await prisma.carModel.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carModelWithIdOnly = await prisma.carModel.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarModelFindManyArgs>(
      args?: SelectSubset<T, CarModelFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CarModel.
     * @param {CarModelCreateArgs} args - Arguments to create a CarModel.
     * @example
     * // Create one CarModel
     * const CarModel = await prisma.carModel.create({
     *   data: {
     *     // ... data to create a CarModel
     *   }
     * })
     *
     */
    create<T extends CarModelCreateArgs>(
      args: SelectSubset<T, CarModelCreateArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CarModels.
     * @param {CarModelCreateManyArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarModelCreateManyArgs>(
      args?: SelectSubset<T, CarModelCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CarModels and returns the data saved in the database.
     * @param {CarModelCreateManyAndReturnArgs} args - Arguments to create many CarModels.
     * @example
     * // Create many CarModels
     * const carModel = await prisma.carModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CarModels and only return the `id`
     * const carModelWithIdOnly = await prisma.carModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarModelCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarModelCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CarModel.
     * @param {CarModelDeleteArgs} args - Arguments to delete one CarModel.
     * @example
     * // Delete one CarModel
     * const CarModel = await prisma.carModel.delete({
     *   where: {
     *     // ... filter to delete one CarModel
     *   }
     * })
     *
     */
    delete<T extends CarModelDeleteArgs>(
      args: SelectSubset<T, CarModelDeleteArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CarModel.
     * @param {CarModelUpdateArgs} args - Arguments to update one CarModel.
     * @example
     * // Update one CarModel
     * const carModel = await prisma.carModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarModelUpdateArgs>(
      args: SelectSubset<T, CarModelUpdateArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CarModels.
     * @param {CarModelDeleteManyArgs} args - Arguments to filter CarModels to delete.
     * @example
     * // Delete a few CarModels
     * const { count } = await prisma.carModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarModelDeleteManyArgs>(
      args?: SelectSubset<T, CarModelDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarModelUpdateManyArgs>(
      args: SelectSubset<T, CarModelUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarModels and returns the data updated in the database.
     * @param {CarModelUpdateManyAndReturnArgs} args - Arguments to update many CarModels.
     * @example
     * // Update many CarModels
     * const carModel = await prisma.carModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CarModels and only return the `id`
     * const carModelWithIdOnly = await prisma.carModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CarModelUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarModelUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CarModel.
     * @param {CarModelUpsertArgs} args - Arguments to update or create a CarModel.
     * @example
     * // Update or create a CarModel
     * const carModel = await prisma.carModel.upsert({
     *   create: {
     *     // ... data to create a CarModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarModel we want to update
     *   }
     * })
     */
    upsert<T extends CarModelUpsertArgs>(
      args: SelectSubset<T, CarModelUpsertArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      $Result.GetResult<
        Prisma.$CarModelPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CarModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelCountArgs} args - Arguments to filter CarModels to count.
     * @example
     * // Count the number of CarModels
     * const count = await prisma.carModel.count({
     *   where: {
     *     // ... the filter for the CarModels we want to count
     *   }
     * })
     **/
    count<T extends CarModelCountArgs>(
      args?: Subset<T, CarModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CarModelCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarModelAggregateArgs>(
      args: Subset<T, CarModelAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarModelAggregateType<T>>;

    /**
     * Group by CarModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CarModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarModelGroupByArgs["orderBy"] }
        : { orderBy?: CarModelGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CarModelGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCarModelGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CarModel model
     */
    readonly fields: CarModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarModelClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    make<T extends CarMakeDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CarMakeDefaultArgs<ExtArgs>>,
    ): Prisma__CarMakeClient<
      | $Result.GetResult<
          Prisma.$CarMakePayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parts<T extends CarModel$partsArgs<ExtArgs> = {}>(
      args?: Subset<T, CarModel$partsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CarPartPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CarModel model
   */
  interface CarModelFieldRefs {
    readonly id: FieldRef<"CarModel", "Int">;
    readonly name: FieldRef<"CarModel", "String">;
    readonly makeId: FieldRef<"CarModel", "Int">;
    readonly createdAt: FieldRef<"CarModel", "DateTime">;
    readonly updatedAt: FieldRef<"CarModel", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CarModel findUnique
   */
  export type CarModelFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput;
  };

  /**
   * CarModel findUniqueOrThrow
   */
  export type CarModelFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter, which CarModel to fetch.
     */
    where: CarModelWhereUniqueInput;
  };

  /**
   * CarModel findFirst
   */
  export type CarModelFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarModels to fetch.
     */
    orderBy?:
      | CarModelOrderByWithRelationInput
      | CarModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[];
  };

  /**
   * CarModel findFirstOrThrow
   */
  export type CarModelFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter, which CarModel to fetch.
     */
    where?: CarModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarModels to fetch.
     */
    orderBy?:
      | CarModelOrderByWithRelationInput
      | CarModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarModels.
     */
    cursor?: CarModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarModels.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarModels.
     */
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[];
  };

  /**
   * CarModel findMany
   */
  export type CarModelFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter, which CarModels to fetch.
     */
    where?: CarModelWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarModels to fetch.
     */
    orderBy?:
      | CarModelOrderByWithRelationInput
      | CarModelOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CarModels.
     */
    cursor?: CarModelWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarModels from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarModels.
     */
    skip?: number;
    distinct?: CarModelScalarFieldEnum | CarModelScalarFieldEnum[];
  };

  /**
   * CarModel create
   */
  export type CarModelCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * The data needed to create a CarModel.
     */
    data: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>;
  };

  /**
   * CarModel createMany
   */
  export type CarModelCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarModel createManyAndReturn
   */
  export type CarModelCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * The data used to create many CarModels.
     */
    data: CarModelCreateManyInput | CarModelCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CarModel update
   */
  export type CarModelUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * The data needed to update a CarModel.
     */
    data: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>;
    /**
     * Choose, which CarModel to update.
     */
    where: CarModelWhereUniqueInput;
  };

  /**
   * CarModel updateMany
   */
  export type CarModelUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CarModels.
     */
    data: XOR<
      CarModelUpdateManyMutationInput,
      CarModelUncheckedUpdateManyInput
    >;
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput;
    /**
     * Limit how many CarModels to update.
     */
    limit?: number;
  };

  /**
   * CarModel updateManyAndReturn
   */
  export type CarModelUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * The data used to update CarModels.
     */
    data: XOR<
      CarModelUpdateManyMutationInput,
      CarModelUncheckedUpdateManyInput
    >;
    /**
     * Filter which CarModels to update
     */
    where?: CarModelWhereInput;
    /**
     * Limit how many CarModels to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CarModel upsert
   */
  export type CarModelUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * The filter to search for the CarModel to update in case it exists.
     */
    where: CarModelWhereUniqueInput;
    /**
     * In case the CarModel found by the `where` argument doesn't exist, create a new CarModel with this data.
     */
    create: XOR<CarModelCreateInput, CarModelUncheckedCreateInput>;
    /**
     * In case the CarModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarModelUpdateInput, CarModelUncheckedUpdateInput>;
  };

  /**
   * CarModel delete
   */
  export type CarModelDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
    /**
     * Filter which CarModel to delete.
     */
    where: CarModelWhereUniqueInput;
  };

  /**
   * CarModel deleteMany
   */
  export type CarModelDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarModels to delete
     */
    where?: CarModelWhereInput;
    /**
     * Limit how many CarModels to delete.
     */
    limit?: number;
  };

  /**
   * CarModel.parts
   */
  export type CarModel$partsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    where?: CarPartWhereInput;
    orderBy?:
      | CarPartOrderByWithRelationInput
      | CarPartOrderByWithRelationInput[];
    cursor?: CarPartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CarPartScalarFieldEnum | CarPartScalarFieldEnum[];
  };

  /**
   * CarModel without action
   */
  export type CarModelDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarModel
     */
    select?: CarModelSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarModel
     */
    omit?: CarModelOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarModelInclude<ExtArgs> | null;
  };

  /**
   * Model CarPart
   */

  export type AggregateCarPart = {
    _count: CarPartCountAggregateOutputType | null;
    _avg: CarPartAvgAggregateOutputType | null;
    _sum: CarPartSumAggregateOutputType | null;
    _min: CarPartMinAggregateOutputType | null;
    _max: CarPartMaxAggregateOutputType | null;
  };

  export type CarPartAvgAggregateOutputType = {
    id: number | null;
    modelId: number | null;
  };

  export type CarPartSumAggregateOutputType = {
    id: number | null;
    modelId: number | null;
  };

  export type CarPartMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    modelId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarPartMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    modelId: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CarPartCountAggregateOutputType = {
    id: number;
    name: number;
    modelId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CarPartAvgAggregateInputType = {
    id?: true;
    modelId?: true;
  };

  export type CarPartSumAggregateInputType = {
    id?: true;
    modelId?: true;
  };

  export type CarPartMinAggregateInputType = {
    id?: true;
    name?: true;
    modelId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarPartMaxAggregateInputType = {
    id?: true;
    name?: true;
    modelId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CarPartCountAggregateInputType = {
    id?: true;
    name?: true;
    modelId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CarPartAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarPart to aggregate.
     */
    where?: CarPartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarParts to fetch.
     */
    orderBy?:
      | CarPartOrderByWithRelationInput
      | CarPartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CarPartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarParts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarParts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CarParts
     **/
    _count?: true | CarPartCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CarPartAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CarPartSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CarPartMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CarPartMaxAggregateInputType;
  };

  export type GetCarPartAggregateType<T extends CarPartAggregateArgs> = {
    [P in keyof T & keyof AggregateCarPart]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarPart[P]>
      : GetScalarType<T[P], AggregateCarPart[P]>;
  };

  export type CarPartGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CarPartWhereInput;
    orderBy?:
      | CarPartOrderByWithAggregationInput
      | CarPartOrderByWithAggregationInput[];
    by: CarPartScalarFieldEnum[] | CarPartScalarFieldEnum;
    having?: CarPartScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarPartCountAggregateInputType | true;
    _avg?: CarPartAvgAggregateInputType;
    _sum?: CarPartSumAggregateInputType;
    _min?: CarPartMinAggregateInputType;
    _max?: CarPartMaxAggregateInputType;
  };

  export type CarPartGroupByOutputType = {
    id: number;
    name: string;
    modelId: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CarPartCountAggregateOutputType | null;
    _avg: CarPartAvgAggregateOutputType | null;
    _sum: CarPartSumAggregateOutputType | null;
    _min: CarPartMinAggregateOutputType | null;
    _max: CarPartMaxAggregateOutputType | null;
  };

  type GetCarPartGroupByPayload<T extends CarPartGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CarPartGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CarPartGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarPartGroupByOutputType[P]>
            : GetScalarType<T[P], CarPartGroupByOutputType[P]>;
        }
      >
    >;

  export type CarPartSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      modelId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      model?: boolean | CarModelDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carPart"]
  >;

  export type CarPartSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      modelId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      model?: boolean | CarModelDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carPart"]
  >;

  export type CarPartSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      modelId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      model?: boolean | CarModelDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["carPart"]
  >;

  export type CarPartSelectScalar = {
    id?: boolean;
    name?: boolean;
    modelId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CarPartOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "modelId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["carPart"]
  >;
  export type CarPartInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    model?: boolean | CarModelDefaultArgs<ExtArgs>;
  };
  export type CarPartIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    model?: boolean | CarModelDefaultArgs<ExtArgs>;
  };
  export type CarPartIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    model?: boolean | CarModelDefaultArgs<ExtArgs>;
  };

  export type $CarPartPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "CarPart";
    objects: {
      model: Prisma.$CarModelPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        modelId: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["carPart"]
    >;
    composites: {};
  };

  type CarPartGetPayload<
    S extends boolean | null | undefined | CarPartDefaultArgs,
  > = $Result.GetResult<Prisma.$CarPartPayload, S>;

  type CarPartCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CarPartFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: CarPartCountAggregateInputType | true;
  };

  export interface CarPartDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["CarPart"];
      meta: { name: "CarPart" };
    };
    /**
     * Find zero or one CarPart that matches the filter.
     * @param {CarPartFindUniqueArgs} args - Arguments to find a CarPart
     * @example
     * // Get one CarPart
     * const carPart = await prisma.carPart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarPartFindUniqueArgs>(
      args: SelectSubset<T, CarPartFindUniqueArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CarPart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarPartFindUniqueOrThrowArgs} args - Arguments to find a CarPart
     * @example
     * // Get one CarPart
     * const carPart = await prisma.carPart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarPartFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CarPartFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarPart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartFindFirstArgs} args - Arguments to find a CarPart
     * @example
     * // Get one CarPart
     * const carPart = await prisma.carPart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarPartFindFirstArgs>(
      args?: SelectSubset<T, CarPartFindFirstArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CarPart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartFindFirstOrThrowArgs} args - Arguments to find a CarPart
     * @example
     * // Get one CarPart
     * const carPart = await prisma.carPart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarPartFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CarPartFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more CarParts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarParts
     * const carParts = await prisma.carPart.findMany()
     *
     * // Get first 10 CarParts
     * const carParts = await prisma.carPart.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const carPartWithIdOnly = await prisma.carPart.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CarPartFindManyArgs>(
      args?: SelectSubset<T, CarPartFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CarPart.
     * @param {CarPartCreateArgs} args - Arguments to create a CarPart.
     * @example
     * // Create one CarPart
     * const CarPart = await prisma.carPart.create({
     *   data: {
     *     // ... data to create a CarPart
     *   }
     * })
     *
     */
    create<T extends CarPartCreateArgs>(
      args: SelectSubset<T, CarPartCreateArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many CarParts.
     * @param {CarPartCreateManyArgs} args - Arguments to create many CarParts.
     * @example
     * // Create many CarParts
     * const carPart = await prisma.carPart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CarPartCreateManyArgs>(
      args?: SelectSubset<T, CarPartCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many CarParts and returns the data saved in the database.
     * @param {CarPartCreateManyAndReturnArgs} args - Arguments to create many CarParts.
     * @example
     * // Create many CarParts
     * const carPart = await prisma.carPart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CarParts and only return the `id`
     * const carPartWithIdOnly = await prisma.carPart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CarPartCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CarPartCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CarPart.
     * @param {CarPartDeleteArgs} args - Arguments to delete one CarPart.
     * @example
     * // Delete one CarPart
     * const CarPart = await prisma.carPart.delete({
     *   where: {
     *     // ... filter to delete one CarPart
     *   }
     * })
     *
     */
    delete<T extends CarPartDeleteArgs>(
      args: SelectSubset<T, CarPartDeleteArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CarPart.
     * @param {CarPartUpdateArgs} args - Arguments to update one CarPart.
     * @example
     * // Update one CarPart
     * const carPart = await prisma.carPart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CarPartUpdateArgs>(
      args: SelectSubset<T, CarPartUpdateArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more CarParts.
     * @param {CarPartDeleteManyArgs} args - Arguments to filter CarParts to delete.
     * @example
     * // Delete a few CarParts
     * const { count } = await prisma.carPart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CarPartDeleteManyArgs>(
      args?: SelectSubset<T, CarPartDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarParts
     * const carPart = await prisma.carPart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CarPartUpdateManyArgs>(
      args: SelectSubset<T, CarPartUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more CarParts and returns the data updated in the database.
     * @param {CarPartUpdateManyAndReturnArgs} args - Arguments to update many CarParts.
     * @example
     * // Update many CarParts
     * const carPart = await prisma.carPart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CarParts and only return the `id`
     * const carPartWithIdOnly = await prisma.carPart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CarPartUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CarPartUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CarPart.
     * @param {CarPartUpsertArgs} args - Arguments to update or create a CarPart.
     * @example
     * // Update or create a CarPart
     * const carPart = await prisma.carPart.upsert({
     *   create: {
     *     // ... data to create a CarPart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarPart we want to update
     *   }
     * })
     */
    upsert<T extends CarPartUpsertArgs>(
      args: SelectSubset<T, CarPartUpsertArgs<ExtArgs>>,
    ): Prisma__CarPartClient<
      $Result.GetResult<
        Prisma.$CarPartPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of CarParts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartCountArgs} args - Arguments to filter CarParts to count.
     * @example
     * // Count the number of CarParts
     * const count = await prisma.carPart.count({
     *   where: {
     *     // ... the filter for the CarParts we want to count
     *   }
     * })
     **/
    count<T extends CarPartCountArgs>(
      args?: Subset<T, CarPartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CarPartCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CarPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CarPartAggregateArgs>(
      args: Subset<T, CarPartAggregateArgs>,
    ): Prisma.PrismaPromise<GetCarPartAggregateType<T>>;

    /**
     * Group by CarPart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarPartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CarPartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarPartGroupByArgs["orderBy"] }
        : { orderBy?: CarPartGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CarPartGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetCarPartGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CarPart model
     */
    readonly fields: CarPartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarPart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarPartClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    model<T extends CarModelDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CarModelDefaultArgs<ExtArgs>>,
    ): Prisma__CarModelClient<
      | $Result.GetResult<
          Prisma.$CarModelPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CarPart model
   */
  interface CarPartFieldRefs {
    readonly id: FieldRef<"CarPart", "Int">;
    readonly name: FieldRef<"CarPart", "String">;
    readonly modelId: FieldRef<"CarPart", "Int">;
    readonly createdAt: FieldRef<"CarPart", "DateTime">;
    readonly updatedAt: FieldRef<"CarPart", "DateTime">;
  }

  // Custom InputTypes
  /**
   * CarPart findUnique
   */
  export type CarPartFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter, which CarPart to fetch.
     */
    where: CarPartWhereUniqueInput;
  };

  /**
   * CarPart findUniqueOrThrow
   */
  export type CarPartFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter, which CarPart to fetch.
     */
    where: CarPartWhereUniqueInput;
  };

  /**
   * CarPart findFirst
   */
  export type CarPartFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter, which CarPart to fetch.
     */
    where?: CarPartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarParts to fetch.
     */
    orderBy?:
      | CarPartOrderByWithRelationInput
      | CarPartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarParts.
     */
    cursor?: CarPartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarParts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarParts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarParts.
     */
    distinct?: CarPartScalarFieldEnum | CarPartScalarFieldEnum[];
  };

  /**
   * CarPart findFirstOrThrow
   */
  export type CarPartFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter, which CarPart to fetch.
     */
    where?: CarPartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarParts to fetch.
     */
    orderBy?:
      | CarPartOrderByWithRelationInput
      | CarPartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CarParts.
     */
    cursor?: CarPartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarParts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarParts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CarParts.
     */
    distinct?: CarPartScalarFieldEnum | CarPartScalarFieldEnum[];
  };

  /**
   * CarPart findMany
   */
  export type CarPartFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter, which CarParts to fetch.
     */
    where?: CarPartWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CarParts to fetch.
     */
    orderBy?:
      | CarPartOrderByWithRelationInput
      | CarPartOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CarParts.
     */
    cursor?: CarPartWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CarParts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CarParts.
     */
    skip?: number;
    distinct?: CarPartScalarFieldEnum | CarPartScalarFieldEnum[];
  };

  /**
   * CarPart create
   */
  export type CarPartCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * The data needed to create a CarPart.
     */
    data: XOR<CarPartCreateInput, CarPartUncheckedCreateInput>;
  };

  /**
   * CarPart createMany
   */
  export type CarPartCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many CarParts.
     */
    data: CarPartCreateManyInput | CarPartCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CarPart createManyAndReturn
   */
  export type CarPartCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * The data used to create many CarParts.
     */
    data: CarPartCreateManyInput | CarPartCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CarPart update
   */
  export type CarPartUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * The data needed to update a CarPart.
     */
    data: XOR<CarPartUpdateInput, CarPartUncheckedUpdateInput>;
    /**
     * Choose, which CarPart to update.
     */
    where: CarPartWhereUniqueInput;
  };

  /**
   * CarPart updateMany
   */
  export type CarPartUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update CarParts.
     */
    data: XOR<CarPartUpdateManyMutationInput, CarPartUncheckedUpdateManyInput>;
    /**
     * Filter which CarParts to update
     */
    where?: CarPartWhereInput;
    /**
     * Limit how many CarParts to update.
     */
    limit?: number;
  };

  /**
   * CarPart updateManyAndReturn
   */
  export type CarPartUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * The data used to update CarParts.
     */
    data: XOR<CarPartUpdateManyMutationInput, CarPartUncheckedUpdateManyInput>;
    /**
     * Filter which CarParts to update
     */
    where?: CarPartWhereInput;
    /**
     * Limit how many CarParts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CarPart upsert
   */
  export type CarPartUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * The filter to search for the CarPart to update in case it exists.
     */
    where: CarPartWhereUniqueInput;
    /**
     * In case the CarPart found by the `where` argument doesn't exist, create a new CarPart with this data.
     */
    create: XOR<CarPartCreateInput, CarPartUncheckedCreateInput>;
    /**
     * In case the CarPart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarPartUpdateInput, CarPartUncheckedUpdateInput>;
  };

  /**
   * CarPart delete
   */
  export type CarPartDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
    /**
     * Filter which CarPart to delete.
     */
    where: CarPartWhereUniqueInput;
  };

  /**
   * CarPart deleteMany
   */
  export type CarPartDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CarParts to delete
     */
    where?: CarPartWhereInput;
    /**
     * Limit how many CarParts to delete.
     */
    limit?: number;
  };

  /**
   * CarPart without action
   */
  export type CarPartDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CarPart
     */
    select?: CarPartSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CarPart
     */
    omit?: CarPartOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarPartInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CarMakeScalarFieldEnum: {
    id: "id";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CarMakeScalarFieldEnum =
    (typeof CarMakeScalarFieldEnum)[keyof typeof CarMakeScalarFieldEnum];

  export const CarModelScalarFieldEnum: {
    id: "id";
    name: "name";
    makeId: "makeId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CarModelScalarFieldEnum =
    (typeof CarModelScalarFieldEnum)[keyof typeof CarModelScalarFieldEnum];

  export const CarPartScalarFieldEnum: {
    id: "id";
    name: "name";
    modelId: "modelId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type CarPartScalarFieldEnum =
    (typeof CarPartScalarFieldEnum)[keyof typeof CarPartScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type CarMakeWhereInput = {
    AND?: CarMakeWhereInput | CarMakeWhereInput[];
    OR?: CarMakeWhereInput[];
    NOT?: CarMakeWhereInput | CarMakeWhereInput[];
    id?: IntFilter<"CarMake"> | number;
    name?: StringFilter<"CarMake"> | string;
    createdAt?: DateTimeFilter<"CarMake"> | Date | string;
    updatedAt?: DateTimeFilter<"CarMake"> | Date | string;
    models?: CarModelListRelationFilter;
  };

  export type CarMakeOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    models?: CarModelOrderByRelationAggregateInput;
  };

  export type CarMakeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      name?: string;
      AND?: CarMakeWhereInput | CarMakeWhereInput[];
      OR?: CarMakeWhereInput[];
      NOT?: CarMakeWhereInput | CarMakeWhereInput[];
      createdAt?: DateTimeFilter<"CarMake"> | Date | string;
      updatedAt?: DateTimeFilter<"CarMake"> | Date | string;
      models?: CarModelListRelationFilter;
    },
    "id" | "name"
  >;

  export type CarMakeOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CarMakeCountOrderByAggregateInput;
    _avg?: CarMakeAvgOrderByAggregateInput;
    _max?: CarMakeMaxOrderByAggregateInput;
    _min?: CarMakeMinOrderByAggregateInput;
    _sum?: CarMakeSumOrderByAggregateInput;
  };

  export type CarMakeScalarWhereWithAggregatesInput = {
    AND?:
      | CarMakeScalarWhereWithAggregatesInput
      | CarMakeScalarWhereWithAggregatesInput[];
    OR?: CarMakeScalarWhereWithAggregatesInput[];
    NOT?:
      | CarMakeScalarWhereWithAggregatesInput
      | CarMakeScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"CarMake"> | number;
    name?: StringWithAggregatesFilter<"CarMake"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"CarMake"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"CarMake"> | Date | string;
  };

  export type CarModelWhereInput = {
    AND?: CarModelWhereInput | CarModelWhereInput[];
    OR?: CarModelWhereInput[];
    NOT?: CarModelWhereInput | CarModelWhereInput[];
    id?: IntFilter<"CarModel"> | number;
    name?: StringFilter<"CarModel"> | string;
    makeId?: IntFilter<"CarModel"> | number;
    createdAt?: DateTimeFilter<"CarModel"> | Date | string;
    updatedAt?: DateTimeFilter<"CarModel"> | Date | string;
    make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>;
    parts?: CarPartListRelationFilter;
  };

  export type CarModelOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    makeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    make?: CarMakeOrderByWithRelationInput;
    parts?: CarPartOrderByRelationAggregateInput;
  };

  export type CarModelWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CarModelWhereInput | CarModelWhereInput[];
      OR?: CarModelWhereInput[];
      NOT?: CarModelWhereInput | CarModelWhereInput[];
      name?: StringFilter<"CarModel"> | string;
      makeId?: IntFilter<"CarModel"> | number;
      createdAt?: DateTimeFilter<"CarModel"> | Date | string;
      updatedAt?: DateTimeFilter<"CarModel"> | Date | string;
      make?: XOR<CarMakeScalarRelationFilter, CarMakeWhereInput>;
      parts?: CarPartListRelationFilter;
    },
    "id"
  >;

  export type CarModelOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    makeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CarModelCountOrderByAggregateInput;
    _avg?: CarModelAvgOrderByAggregateInput;
    _max?: CarModelMaxOrderByAggregateInput;
    _min?: CarModelMinOrderByAggregateInput;
    _sum?: CarModelSumOrderByAggregateInput;
  };

  export type CarModelScalarWhereWithAggregatesInput = {
    AND?:
      | CarModelScalarWhereWithAggregatesInput
      | CarModelScalarWhereWithAggregatesInput[];
    OR?: CarModelScalarWhereWithAggregatesInput[];
    NOT?:
      | CarModelScalarWhereWithAggregatesInput
      | CarModelScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"CarModel"> | number;
    name?: StringWithAggregatesFilter<"CarModel"> | string;
    makeId?: IntWithAggregatesFilter<"CarModel"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"CarModel"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"CarModel"> | Date | string;
  };

  export type CarPartWhereInput = {
    AND?: CarPartWhereInput | CarPartWhereInput[];
    OR?: CarPartWhereInput[];
    NOT?: CarPartWhereInput | CarPartWhereInput[];
    id?: IntFilter<"CarPart"> | number;
    name?: StringFilter<"CarPart"> | string;
    modelId?: IntFilter<"CarPart"> | number;
    createdAt?: DateTimeFilter<"CarPart"> | Date | string;
    updatedAt?: DateTimeFilter<"CarPart"> | Date | string;
    model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>;
  };

  export type CarPartOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    modelId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    model?: CarModelOrderByWithRelationInput;
  };

  export type CarPartWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CarPartWhereInput | CarPartWhereInput[];
      OR?: CarPartWhereInput[];
      NOT?: CarPartWhereInput | CarPartWhereInput[];
      name?: StringFilter<"CarPart"> | string;
      modelId?: IntFilter<"CarPart"> | number;
      createdAt?: DateTimeFilter<"CarPart"> | Date | string;
      updatedAt?: DateTimeFilter<"CarPart"> | Date | string;
      model?: XOR<CarModelScalarRelationFilter, CarModelWhereInput>;
    },
    "id"
  >;

  export type CarPartOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    modelId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CarPartCountOrderByAggregateInput;
    _avg?: CarPartAvgOrderByAggregateInput;
    _max?: CarPartMaxOrderByAggregateInput;
    _min?: CarPartMinOrderByAggregateInput;
    _sum?: CarPartSumOrderByAggregateInput;
  };

  export type CarPartScalarWhereWithAggregatesInput = {
    AND?:
      | CarPartScalarWhereWithAggregatesInput
      | CarPartScalarWhereWithAggregatesInput[];
    OR?: CarPartScalarWhereWithAggregatesInput[];
    NOT?:
      | CarPartScalarWhereWithAggregatesInput
      | CarPartScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"CarPart"> | number;
    name?: StringWithAggregatesFilter<"CarPart"> | string;
    modelId?: IntWithAggregatesFilter<"CarPart"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"CarPart"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"CarPart"> | Date | string;
  };

  export type CarMakeCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: CarModelCreateNestedManyWithoutMakeInput;
  };

  export type CarMakeUncheckedCreateInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    models?: CarModelUncheckedCreateNestedManyWithoutMakeInput;
  };

  export type CarMakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    models?: CarModelUpdateManyWithoutMakeNestedInput;
  };

  export type CarMakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    models?: CarModelUncheckedUpdateManyWithoutMakeNestedInput;
  };

  export type CarMakeCreateManyInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarMakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarMakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarModelCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    make: CarMakeCreateNestedOneWithoutModelsInput;
    parts?: CarPartCreateNestedManyWithoutModelInput;
  };

  export type CarModelUncheckedCreateInput = {
    id?: number;
    name: string;
    makeId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parts?: CarPartUncheckedCreateNestedManyWithoutModelInput;
  };

  export type CarModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput;
    parts?: CarPartUpdateManyWithoutModelNestedInput;
  };

  export type CarModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    makeId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parts?: CarPartUncheckedUpdateManyWithoutModelNestedInput;
  };

  export type CarModelCreateManyInput = {
    id?: number;
    name: string;
    makeId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    makeId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    model: CarModelCreateNestedOneWithoutPartsInput;
  };

  export type CarPartUncheckedCreateInput = {
    id?: number;
    name: string;
    modelId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarPartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    model?: CarModelUpdateOneRequiredWithoutPartsNestedInput;
  };

  export type CarPartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    modelId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartCreateManyInput = {
    id?: number;
    name: string;
    modelId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarPartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    modelId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type CarModelListRelationFilter = {
    every?: CarModelWhereInput;
    some?: CarModelWhereInput;
    none?: CarModelWhereInput;
  };

  export type CarModelOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CarMakeCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarMakeAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CarMakeMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarMakeMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarMakeSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CarMakeScalarRelationFilter = {
    is?: CarMakeWhereInput;
    isNot?: CarMakeWhereInput;
  };

  export type CarPartListRelationFilter = {
    every?: CarPartWhereInput;
    some?: CarPartWhereInput;
    none?: CarPartWhereInput;
  };

  export type CarPartOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CarModelCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    makeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarModelAvgOrderByAggregateInput = {
    id?: SortOrder;
    makeId?: SortOrder;
  };

  export type CarModelMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    makeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarModelMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    makeId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarModelSumOrderByAggregateInput = {
    id?: SortOrder;
    makeId?: SortOrder;
  };

  export type CarModelScalarRelationFilter = {
    is?: CarModelWhereInput;
    isNot?: CarModelWhereInput;
  };

  export type CarPartCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    modelId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarPartAvgOrderByAggregateInput = {
    id?: SortOrder;
    modelId?: SortOrder;
  };

  export type CarPartMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    modelId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarPartMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    modelId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CarPartSumOrderByAggregateInput = {
    id?: SortOrder;
    modelId?: SortOrder;
  };

  export type CarModelCreateNestedManyWithoutMakeInput = {
    create?:
      | XOR<
          CarModelCreateWithoutMakeInput,
          CarModelUncheckedCreateWithoutMakeInput
        >
      | CarModelCreateWithoutMakeInput[]
      | CarModelUncheckedCreateWithoutMakeInput[];
    connectOrCreate?:
      | CarModelCreateOrConnectWithoutMakeInput
      | CarModelCreateOrConnectWithoutMakeInput[];
    createMany?: CarModelCreateManyMakeInputEnvelope;
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
  };

  export type CarModelUncheckedCreateNestedManyWithoutMakeInput = {
    create?:
      | XOR<
          CarModelCreateWithoutMakeInput,
          CarModelUncheckedCreateWithoutMakeInput
        >
      | CarModelCreateWithoutMakeInput[]
      | CarModelUncheckedCreateWithoutMakeInput[];
    connectOrCreate?:
      | CarModelCreateOrConnectWithoutMakeInput
      | CarModelCreateOrConnectWithoutMakeInput[];
    createMany?: CarModelCreateManyMakeInputEnvelope;
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type CarModelUpdateManyWithoutMakeNestedInput = {
    create?:
      | XOR<
          CarModelCreateWithoutMakeInput,
          CarModelUncheckedCreateWithoutMakeInput
        >
      | CarModelCreateWithoutMakeInput[]
      | CarModelUncheckedCreateWithoutMakeInput[];
    connectOrCreate?:
      | CarModelCreateOrConnectWithoutMakeInput
      | CarModelCreateOrConnectWithoutMakeInput[];
    upsert?:
      | CarModelUpsertWithWhereUniqueWithoutMakeInput
      | CarModelUpsertWithWhereUniqueWithoutMakeInput[];
    createMany?: CarModelCreateManyMakeInputEnvelope;
    set?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    disconnect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    delete?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    update?:
      | CarModelUpdateWithWhereUniqueWithoutMakeInput
      | CarModelUpdateWithWhereUniqueWithoutMakeInput[];
    updateMany?:
      | CarModelUpdateManyWithWhereWithoutMakeInput
      | CarModelUpdateManyWithWhereWithoutMakeInput[];
    deleteMany?: CarModelScalarWhereInput | CarModelScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type CarModelUncheckedUpdateManyWithoutMakeNestedInput = {
    create?:
      | XOR<
          CarModelCreateWithoutMakeInput,
          CarModelUncheckedCreateWithoutMakeInput
        >
      | CarModelCreateWithoutMakeInput[]
      | CarModelUncheckedCreateWithoutMakeInput[];
    connectOrCreate?:
      | CarModelCreateOrConnectWithoutMakeInput
      | CarModelCreateOrConnectWithoutMakeInput[];
    upsert?:
      | CarModelUpsertWithWhereUniqueWithoutMakeInput
      | CarModelUpsertWithWhereUniqueWithoutMakeInput[];
    createMany?: CarModelCreateManyMakeInputEnvelope;
    set?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    disconnect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    delete?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    connect?: CarModelWhereUniqueInput | CarModelWhereUniqueInput[];
    update?:
      | CarModelUpdateWithWhereUniqueWithoutMakeInput
      | CarModelUpdateWithWhereUniqueWithoutMakeInput[];
    updateMany?:
      | CarModelUpdateManyWithWhereWithoutMakeInput
      | CarModelUpdateManyWithWhereWithoutMakeInput[];
    deleteMany?: CarModelScalarWhereInput | CarModelScalarWhereInput[];
  };

  export type CarMakeCreateNestedOneWithoutModelsInput = {
    create?: XOR<
      CarMakeCreateWithoutModelsInput,
      CarMakeUncheckedCreateWithoutModelsInput
    >;
    connectOrCreate?: CarMakeCreateOrConnectWithoutModelsInput;
    connect?: CarMakeWhereUniqueInput;
  };

  export type CarPartCreateNestedManyWithoutModelInput = {
    create?:
      | XOR<
          CarPartCreateWithoutModelInput,
          CarPartUncheckedCreateWithoutModelInput
        >
      | CarPartCreateWithoutModelInput[]
      | CarPartUncheckedCreateWithoutModelInput[];
    connectOrCreate?:
      | CarPartCreateOrConnectWithoutModelInput
      | CarPartCreateOrConnectWithoutModelInput[];
    createMany?: CarPartCreateManyModelInputEnvelope;
    connect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
  };

  export type CarPartUncheckedCreateNestedManyWithoutModelInput = {
    create?:
      | XOR<
          CarPartCreateWithoutModelInput,
          CarPartUncheckedCreateWithoutModelInput
        >
      | CarPartCreateWithoutModelInput[]
      | CarPartUncheckedCreateWithoutModelInput[];
    connectOrCreate?:
      | CarPartCreateOrConnectWithoutModelInput
      | CarPartCreateOrConnectWithoutModelInput[];
    createMany?: CarPartCreateManyModelInputEnvelope;
    connect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
  };

  export type CarMakeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<
      CarMakeCreateWithoutModelsInput,
      CarMakeUncheckedCreateWithoutModelsInput
    >;
    connectOrCreate?: CarMakeCreateOrConnectWithoutModelsInput;
    upsert?: CarMakeUpsertWithoutModelsInput;
    connect?: CarMakeWhereUniqueInput;
    update?: XOR<
      XOR<
        CarMakeUpdateToOneWithWhereWithoutModelsInput,
        CarMakeUpdateWithoutModelsInput
      >,
      CarMakeUncheckedUpdateWithoutModelsInput
    >;
  };

  export type CarPartUpdateManyWithoutModelNestedInput = {
    create?:
      | XOR<
          CarPartCreateWithoutModelInput,
          CarPartUncheckedCreateWithoutModelInput
        >
      | CarPartCreateWithoutModelInput[]
      | CarPartUncheckedCreateWithoutModelInput[];
    connectOrCreate?:
      | CarPartCreateOrConnectWithoutModelInput
      | CarPartCreateOrConnectWithoutModelInput[];
    upsert?:
      | CarPartUpsertWithWhereUniqueWithoutModelInput
      | CarPartUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: CarPartCreateManyModelInputEnvelope;
    set?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    disconnect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    delete?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    connect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    update?:
      | CarPartUpdateWithWhereUniqueWithoutModelInput
      | CarPartUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?:
      | CarPartUpdateManyWithWhereWithoutModelInput
      | CarPartUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: CarPartScalarWhereInput | CarPartScalarWhereInput[];
  };

  export type CarPartUncheckedUpdateManyWithoutModelNestedInput = {
    create?:
      | XOR<
          CarPartCreateWithoutModelInput,
          CarPartUncheckedCreateWithoutModelInput
        >
      | CarPartCreateWithoutModelInput[]
      | CarPartUncheckedCreateWithoutModelInput[];
    connectOrCreate?:
      | CarPartCreateOrConnectWithoutModelInput
      | CarPartCreateOrConnectWithoutModelInput[];
    upsert?:
      | CarPartUpsertWithWhereUniqueWithoutModelInput
      | CarPartUpsertWithWhereUniqueWithoutModelInput[];
    createMany?: CarPartCreateManyModelInputEnvelope;
    set?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    disconnect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    delete?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    connect?: CarPartWhereUniqueInput | CarPartWhereUniqueInput[];
    update?:
      | CarPartUpdateWithWhereUniqueWithoutModelInput
      | CarPartUpdateWithWhereUniqueWithoutModelInput[];
    updateMany?:
      | CarPartUpdateManyWithWhereWithoutModelInput
      | CarPartUpdateManyWithWhereWithoutModelInput[];
    deleteMany?: CarPartScalarWhereInput | CarPartScalarWhereInput[];
  };

  export type CarModelCreateNestedOneWithoutPartsInput = {
    create?: XOR<
      CarModelCreateWithoutPartsInput,
      CarModelUncheckedCreateWithoutPartsInput
    >;
    connectOrCreate?: CarModelCreateOrConnectWithoutPartsInput;
    connect?: CarModelWhereUniqueInput;
  };

  export type CarModelUpdateOneRequiredWithoutPartsNestedInput = {
    create?: XOR<
      CarModelCreateWithoutPartsInput,
      CarModelUncheckedCreateWithoutPartsInput
    >;
    connectOrCreate?: CarModelCreateOrConnectWithoutPartsInput;
    upsert?: CarModelUpsertWithoutPartsInput;
    connect?: CarModelWhereUniqueInput;
    update?: XOR<
      XOR<
        CarModelUpdateToOneWithWhereWithoutPartsInput,
        CarModelUpdateWithoutPartsInput
      >,
      CarModelUncheckedUpdateWithoutPartsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type CarModelCreateWithoutMakeInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parts?: CarPartCreateNestedManyWithoutModelInput;
  };

  export type CarModelUncheckedCreateWithoutMakeInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parts?: CarPartUncheckedCreateNestedManyWithoutModelInput;
  };

  export type CarModelCreateOrConnectWithoutMakeInput = {
    where: CarModelWhereUniqueInput;
    create: XOR<
      CarModelCreateWithoutMakeInput,
      CarModelUncheckedCreateWithoutMakeInput
    >;
  };

  export type CarModelCreateManyMakeInputEnvelope = {
    data: CarModelCreateManyMakeInput | CarModelCreateManyMakeInput[];
    skipDuplicates?: boolean;
  };

  export type CarModelUpsertWithWhereUniqueWithoutMakeInput = {
    where: CarModelWhereUniqueInput;
    update: XOR<
      CarModelUpdateWithoutMakeInput,
      CarModelUncheckedUpdateWithoutMakeInput
    >;
    create: XOR<
      CarModelCreateWithoutMakeInput,
      CarModelUncheckedCreateWithoutMakeInput
    >;
  };

  export type CarModelUpdateWithWhereUniqueWithoutMakeInput = {
    where: CarModelWhereUniqueInput;
    data: XOR<
      CarModelUpdateWithoutMakeInput,
      CarModelUncheckedUpdateWithoutMakeInput
    >;
  };

  export type CarModelUpdateManyWithWhereWithoutMakeInput = {
    where: CarModelScalarWhereInput;
    data: XOR<
      CarModelUpdateManyMutationInput,
      CarModelUncheckedUpdateManyWithoutMakeInput
    >;
  };

  export type CarModelScalarWhereInput = {
    AND?: CarModelScalarWhereInput | CarModelScalarWhereInput[];
    OR?: CarModelScalarWhereInput[];
    NOT?: CarModelScalarWhereInput | CarModelScalarWhereInput[];
    id?: IntFilter<"CarModel"> | number;
    name?: StringFilter<"CarModel"> | string;
    makeId?: IntFilter<"CarModel"> | number;
    createdAt?: DateTimeFilter<"CarModel"> | Date | string;
    updatedAt?: DateTimeFilter<"CarModel"> | Date | string;
  };

  export type CarMakeCreateWithoutModelsInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarMakeUncheckedCreateWithoutModelsInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarMakeCreateOrConnectWithoutModelsInput = {
    where: CarMakeWhereUniqueInput;
    create: XOR<
      CarMakeCreateWithoutModelsInput,
      CarMakeUncheckedCreateWithoutModelsInput
    >;
  };

  export type CarPartCreateWithoutModelInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarPartUncheckedCreateWithoutModelInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarPartCreateOrConnectWithoutModelInput = {
    where: CarPartWhereUniqueInput;
    create: XOR<
      CarPartCreateWithoutModelInput,
      CarPartUncheckedCreateWithoutModelInput
    >;
  };

  export type CarPartCreateManyModelInputEnvelope = {
    data: CarPartCreateManyModelInput | CarPartCreateManyModelInput[];
    skipDuplicates?: boolean;
  };

  export type CarMakeUpsertWithoutModelsInput = {
    update: XOR<
      CarMakeUpdateWithoutModelsInput,
      CarMakeUncheckedUpdateWithoutModelsInput
    >;
    create: XOR<
      CarMakeCreateWithoutModelsInput,
      CarMakeUncheckedCreateWithoutModelsInput
    >;
    where?: CarMakeWhereInput;
  };

  export type CarMakeUpdateToOneWithWhereWithoutModelsInput = {
    where?: CarMakeWhereInput;
    data: XOR<
      CarMakeUpdateWithoutModelsInput,
      CarMakeUncheckedUpdateWithoutModelsInput
    >;
  };

  export type CarMakeUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarMakeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartUpsertWithWhereUniqueWithoutModelInput = {
    where: CarPartWhereUniqueInput;
    update: XOR<
      CarPartUpdateWithoutModelInput,
      CarPartUncheckedUpdateWithoutModelInput
    >;
    create: XOR<
      CarPartCreateWithoutModelInput,
      CarPartUncheckedCreateWithoutModelInput
    >;
  };

  export type CarPartUpdateWithWhereUniqueWithoutModelInput = {
    where: CarPartWhereUniqueInput;
    data: XOR<
      CarPartUpdateWithoutModelInput,
      CarPartUncheckedUpdateWithoutModelInput
    >;
  };

  export type CarPartUpdateManyWithWhereWithoutModelInput = {
    where: CarPartScalarWhereInput;
    data: XOR<
      CarPartUpdateManyMutationInput,
      CarPartUncheckedUpdateManyWithoutModelInput
    >;
  };

  export type CarPartScalarWhereInput = {
    AND?: CarPartScalarWhereInput | CarPartScalarWhereInput[];
    OR?: CarPartScalarWhereInput[];
    NOT?: CarPartScalarWhereInput | CarPartScalarWhereInput[];
    id?: IntFilter<"CarPart"> | number;
    name?: StringFilter<"CarPart"> | string;
    modelId?: IntFilter<"CarPart"> | number;
    createdAt?: DateTimeFilter<"CarPart"> | Date | string;
    updatedAt?: DateTimeFilter<"CarPart"> | Date | string;
  };

  export type CarModelCreateWithoutPartsInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    make: CarMakeCreateNestedOneWithoutModelsInput;
  };

  export type CarModelUncheckedCreateWithoutPartsInput = {
    id?: number;
    name: string;
    makeId: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarModelCreateOrConnectWithoutPartsInput = {
    where: CarModelWhereUniqueInput;
    create: XOR<
      CarModelCreateWithoutPartsInput,
      CarModelUncheckedCreateWithoutPartsInput
    >;
  };

  export type CarModelUpsertWithoutPartsInput = {
    update: XOR<
      CarModelUpdateWithoutPartsInput,
      CarModelUncheckedUpdateWithoutPartsInput
    >;
    create: XOR<
      CarModelCreateWithoutPartsInput,
      CarModelUncheckedCreateWithoutPartsInput
    >;
    where?: CarModelWhereInput;
  };

  export type CarModelUpdateToOneWithWhereWithoutPartsInput = {
    where?: CarModelWhereInput;
    data: XOR<
      CarModelUpdateWithoutPartsInput,
      CarModelUncheckedUpdateWithoutPartsInput
    >;
  };

  export type CarModelUpdateWithoutPartsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    make?: CarMakeUpdateOneRequiredWithoutModelsNestedInput;
  };

  export type CarModelUncheckedUpdateWithoutPartsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    makeId?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarModelCreateManyMakeInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarModelUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parts?: CarPartUpdateManyWithoutModelNestedInput;
  };

  export type CarModelUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parts?: CarPartUncheckedUpdateManyWithoutModelNestedInput;
  };

  export type CarModelUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartCreateManyModelInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CarPartUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CarPartUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
