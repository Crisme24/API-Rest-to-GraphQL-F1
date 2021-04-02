import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
        //En la doc de la api el año esta en una propiedad season aqui se la estoy asignado a mi propiedad year
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    }
};

export default type;