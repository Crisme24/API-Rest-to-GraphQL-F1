import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        //seasonList primero la defini en el schema.graphql
        async seasonsList(_: void, __: any, { dataSources } ) {
            //Aqui retornamos la respuesta
            return await dataSources.seasons.getSeasons().then(
                (data: any) => data.MRData.SeasonTable.Seasons
            )
        },

        async racesByYear(_: void, { year }, { dataSources } ) {
            return await dataSources.races.getYear(year).then(
                (data: any) => data.MRData.RaceTable.Races)
        }
    }
};

export default query;