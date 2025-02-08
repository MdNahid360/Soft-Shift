import { getPlaiceholder } from "plaiceholder";


async function getBluerDate(imgSrc) {
    const buffer = await fetch(imgSrc).then(async (res) => Buffer.from(await res.arrayBuffer()));
    
    const data = await getPlaiceholder(buffer);
    return data;
}

export { getBluerDate };