import { IResolvers } from 'graphql-tools';
import { getWikipediaMobileUrl } from '../lib/utils';

const type: IResolvers = {
    Season: {
        //En la doc de la api el año esta en una propiedad season aqui se la estoy asignado a mi propiedad year
        year: parent => parent.season,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        circuit: parent => parent.Circuit
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        location: parent => parent.Location
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url),
        name: parent => parent.givenName.concat(' ') + parent.familyName
    },
    DriverStanding: {
        driver: parent => parent.Driver,
        constructors: parent => parent.Constructors
    },
    Constructor: {
        id: parent => parent.constructorId,
        urlMobile: parent => getWikipediaMobileUrl(parent.url)
    }
};

export default type;