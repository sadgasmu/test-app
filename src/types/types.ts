export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type House = {
  __typename?: 'House';
  builtDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude?: Maybe<Scalars['Int']['output']>;
  longitude?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  numberOfRooms?: Maybe<Scalars['Int']['output']>;
};

export type HouseCreateInput = {
  builtDate?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numberOfRooms?: InputMaybe<Scalars['Int']['input']>;
};

export type HouseUpdateInput = {
  builtDate?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  latitude?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  numberOfRooms?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addHouse?: Maybe<House>;
  updateHouse?: Maybe<House>;
};


export type MutationAddHouseArgs = {
  data?: InputMaybe<HouseCreateInput>;
};


export type MutationUpdateHouseArgs = {
  data?: InputMaybe<HouseUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  findBiggestAndClosest?: Maybe<Array<Maybe<House>>>;
  findBiggestByNumberOfRooms?: Maybe<Array<Maybe<House>>>;
  getAllHouses?: Maybe<Array<Maybe<House>>>;
  getHouse?: Maybe<House>;
};


export type QueryFindBiggestAndClosestArgs = {
  latitude?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetHouseArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};