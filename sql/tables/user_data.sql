CREATE TABLE FANOUT_USER (
    FANOUT_USER_ID INTEGER NOT NULL PRIMARY KEY,
    EMAIL VARCHAR(120) NOT NULL
);

CREATE TABLE FANOUT_CONTACTS (
    FANOUT_USER_ID INTEGER NOT NULL FOREIGN KEY,
    CONTACT_NUMBER INTEGER
);
