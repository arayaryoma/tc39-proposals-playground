import { Instant, ZonedDateTime } from "tc39-proposal-temporal";

const instant = Instant.fromMilliseconds(new Date());

// UTC
console.log(instant.toString()); // =>

// JST
console.log(new ZonedDateTime(instant, 'Asia/Tokyo').toString());
