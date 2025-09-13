import { faker } from "@faker-js/faker"; 

export const createFakeContanct = () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
   job: faker.person.jobTitle(),
});