--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-11-01 22:04:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'WIN1250';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 17416)
-- Name: igra�; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."igra�" (
    "idigra�" integer NOT NULL,
    ime character varying NOT NULL,
    prezime character varying NOT NULL,
    dob integer NOT NULL,
    idkluba integer NOT NULL
);


ALTER TABLE public."igra�" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 17414)
-- Name: igra�_idigra�_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."igra�_idigra�_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."igra�_idigra�_seq" OWNER TO postgres;

--
-- TOC entry 3346 (class 0 OID 0)
-- Dependencies: 211
-- Name: igra�_idigra�_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."igra�_idigra�_seq" OWNED BY public."igra�"."idigra�";


--
-- TOC entry 212 (class 1259 OID 17415)
-- Name: igra�_idkluba_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."igra�_idkluba_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."igra�_idkluba_seq" OWNER TO postgres;

--
-- TOC entry 3347 (class 0 OID 0)
-- Dependencies: 212
-- Name: igra�_idkluba_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."igra�_idkluba_seq" OWNED BY public."igra�".idkluba;


--
-- TOC entry 210 (class 1259 OID 17406)
-- Name: nogometni_klub; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.nogometni_klub (
    idkluba integer NOT NULL,
    naziv character varying NOT NULL,
    datumosn date NOT NULL,
    liga character varying NOT NULL,
    "sjedi�te" character varying NOT NULL,
    stadion character varying NOT NULL,
    glavnisponzor character varying
);


ALTER TABLE public.nogometni_klub OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 17432)
-- Name: trener; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trener (
    idtrener integer NOT NULL,
    ime character varying NOT NULL,
    prezime character varying NOT NULL,
    idkluba integer NOT NULL
);


ALTER TABLE public.trener OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 17447)
-- Name: nogomet; Type: VIEW; Schema: public; Owner: postgres
--

CREATE VIEW public.nogomet AS
 SELECT nogometni_klub.idkluba,
    nogometni_klub.naziv,
    nogometni_klub.datumosn,
    nogometni_klub.liga,
    nogometni_klub."sjedi�te",
    nogometni_klub.stadion,
    nogometni_klub.glavnisponzor,
    trener.idtrener,
    trener.ime AS trenerime,
    trener.prezime AS trenerprezime,
    ( SELECT json_agg(row_to_json("igra�".*)) AS json_agg
           FROM public."igra�"
          WHERE (nogometni_klub.idkluba = "igra�".idkluba)) AS "igra�i"
   FROM (public.nogometni_klub
     JOIN public.trener USING (idkluba));


ALTER TABLE public.nogomet OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 17405)
-- Name: nogometni_klub_idkluba_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.nogometni_klub_idkluba_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.nogometni_klub_idkluba_seq OWNER TO postgres;

--
-- TOC entry 3348 (class 0 OID 0)
-- Dependencies: 209
-- Name: nogometni_klub_idkluba_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.nogometni_klub_idkluba_seq OWNED BY public.nogometni_klub.idkluba;


--
-- TOC entry 215 (class 1259 OID 17431)
-- Name: trener_idkluba_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trener_idkluba_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trener_idkluba_seq OWNER TO postgres;

--
-- TOC entry 3349 (class 0 OID 0)
-- Dependencies: 215
-- Name: trener_idkluba_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trener_idkluba_seq OWNED BY public.trener.idkluba;


--
-- TOC entry 214 (class 1259 OID 17430)
-- Name: trener_idtrener_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trener_idtrener_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trener_idtrener_seq OWNER TO postgres;

--
-- TOC entry 3350 (class 0 OID 0)
-- Dependencies: 214
-- Name: trener_idtrener_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trener_idtrener_seq OWNED BY public.trener.idtrener;


--
-- TOC entry 3181 (class 2604 OID 17419)
-- Name: igra� idigra�; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."igra�" ALTER COLUMN "idigra�" SET DEFAULT nextval('public."igra�_idigra�_seq"'::regclass);


--
-- TOC entry 3182 (class 2604 OID 17420)
-- Name: igra� idkluba; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."igra�" ALTER COLUMN idkluba SET DEFAULT nextval('public."igra�_idkluba_seq"'::regclass);


--
-- TOC entry 3180 (class 2604 OID 17409)
-- Name: nogometni_klub idkluba; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nogometni_klub ALTER COLUMN idkluba SET DEFAULT nextval('public.nogometni_klub_idkluba_seq'::regclass);


--
-- TOC entry 3183 (class 2604 OID 17435)
-- Name: trener idtrener; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trener ALTER COLUMN idtrener SET DEFAULT nextval('public.trener_idtrener_seq'::regclass);


--
-- TOC entry 3184 (class 2604 OID 17436)
-- Name: trener idkluba; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trener ALTER COLUMN idkluba SET DEFAULT nextval('public.trener_idkluba_seq'::regclass);


--
-- TOC entry 3337 (class 0 OID 17416)
-- Dependencies: 213
-- Data for Name: igra�; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."igra�" ("idigra�", ime, prezime, dob, idkluba) FROM stdin;
1	Mislav	Or�i�	29	1
2	Josip	Mi�i�	28	1
3	Arijan	Ademi	31	1
4	Marko	Livaja	29	2
5	Stipe	Biuk	19	2
6	Emir	Sahiti	23	2
7	Alen	Halilovi�	26	3
8	Prince	Ampem	24	3
9	Alen	Grgi�	28	3
10	Tonio	Tekli�	23	4
11	Oliver	Zelenika	29	4
12	Fran	Brodi�	25	4
13	Arber	Hoxha	24	5
14	Ante	Crnac	18	5
15	Ivan	Krstanovi�	39	5
16	Josip	Pivari�	33	6
17	Indrit	Tuci	22	6
18	Ibrahim	Aliyu	20	6
19	Ivan	Dol�ek	22	7
20	Haruki	Arai	24	7
21	Duje	�op	32	7
22	Gonzalo	Collao	25	8
23	Ante	Erceg	32	8
24	Prince	Mumba	21	8
25	Ivica	Ivu�i�	27	9
26	Kristijan	Lovri�	26	9
27	Laszlo	Kleinheisler	28	9
28	Joey	Suk	32	10
29	Dominik	Prokop	25	10
30	Jozo	�imunovi�	28	10
31	Gabriel	Popovic	19	11
32	Ivan	Peri�	20	11
33	Marijan	Or�oli�	24	12
34	Filip	Jazvi�	32	12
35	Ivan	Aleksi�	29	13
36	Josip	Bari�i�	35	13
37	Filip	Ambro�	18	14
38	Marin	Ljubi�i�	34	14
39	Duje	Nin�evi�	25	15
40	Sylvanus	Nimely	24	15
\.


--
-- TOC entry 3334 (class 0 OID 17406)
-- Dependencies: 210
-- Data for Name: nogometni_klub; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.nogometni_klub (idkluba, naziv, datumosn, liga, "sjedi�te", stadion, glavnisponzor) FROM stdin;
1	GNK Dinamo Zagreb	1945-06-09	SuperSport Hrvatska nogometna liga	Zagreb	Stadion Maksimir	PSK
2	HNK Hajduk Split	1911-02-13	SuperSport Hrvatska nogometna liga	Split	Stadion Poljud	Tommy
3	HNK Rijeka	1946-07-29	SuperSport hrvatska nogometna liga	Rijeka	Stadion Rujevica	SAVA osiguranje
4	NK Vara�din	1931-01-23	SuperSport hrvatska nogometna liga	Vara�din	Stadion Varteks	\N
5	NK Slaven Belupo Koprivnica	1907-06-14	SuperSport Hrvatska nogometna liga	Koprivnica	Gradski stadion Koprivnica	Belupo
6	NK Lokomotiva Zagreb	1914-08-25	SuperSport Hrvatska nogometna liga	Zagreb	Stadion Kranj�evi�eva	\N
7	HNK �ibenik	1932-12-01	SuperSport Hrvatska nogometna liga	�ibenik	Stadion �ubi�evac	\N
8	NK Istra 1961	1948-12-04	SuperSport Hrvatska nogometna liga	Pula	Nogometni stadion Aldo Drosina	\N
9	NK Osijek	1947-02-27	SuperSport Hrvatska nogometna liga	Osijek	Stadion Gradski vrt	Meszaros
10	HNK Gorica	2009-08-04	SuperSport Hrvatska nogometna liga	Velika Gorica	Gradski stadion Velika Gorica	\N
11	NK Rude� Zagreb	2009-08-04	Prva nogometna liga	Rude� u Zagrebu	�portski centar Rude�	\N
12	HNK Cibalia	1919-07-06	Prva nogometna liga	Vinkovci	Stadion HNK Cibalia Vinkovci	\N
13	HNK Vukovar 91	1946-08-15	Prva nogometna liga	Vukovar	Gradski stadion	\N
14	NK Dugopolje	1952-07-12	Prva nogometna liga	Dugopolje	Sportski centar Hrvatski vitezovi	\N
15	NK Solin	1919-09-21	Prva nogometna liga	Solin	Stadion pokraj Jadra	\N
\.


--
-- TOC entry 3340 (class 0 OID 17432)
-- Dependencies: 216
-- Data for Name: trener; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trener (idtrener, ime, prezime, idkluba) FROM stdin;
1	Ante	�a�i�	1
2	Mislav	Karoglan	2
3	Serse	Cosmi	3
4	Mario	Kova�evi�	4
5	Zoran	Zeki�	5
6	Goran	tomi�	6
7	Mario	Cvitanovi�	7
8	Krunoslav	Renduli�	8
9	Rene	Poms	9
10	Igor	Angelovski	10
11	Ivica	Landeka	11
12	Petar	Tomi�	12
13	Miroslav	Bojko	13
14	Jure	Srzi�	14
15	Ivan	Mati�	15
\.


--
-- TOC entry 3351 (class 0 OID 0)
-- Dependencies: 211
-- Name: igra�_idigra�_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."igra�_idigra�_seq"', 1, false);


--
-- TOC entry 3352 (class 0 OID 0)
-- Dependencies: 212
-- Name: igra�_idkluba_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."igra�_idkluba_seq"', 1, false);


--
-- TOC entry 3353 (class 0 OID 0)
-- Dependencies: 209
-- Name: nogometni_klub_idkluba_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.nogometni_klub_idkluba_seq', 1, false);


--
-- TOC entry 3354 (class 0 OID 0)
-- Dependencies: 215
-- Name: trener_idkluba_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trener_idkluba_seq', 1, false);


--
-- TOC entry 3355 (class 0 OID 0)
-- Dependencies: 214
-- Name: trener_idtrener_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trener_idtrener_seq', 1, false);


--
-- TOC entry 3188 (class 2606 OID 17424)
-- Name: igra� igra�_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."igra�"
    ADD CONSTRAINT "igra�_pkey" PRIMARY KEY ("idigra�");


--
-- TOC entry 3186 (class 2606 OID 17413)
-- Name: nogometni_klub nogometni_klub_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.nogometni_klub
    ADD CONSTRAINT nogometni_klub_pkey PRIMARY KEY (idkluba);


--
-- TOC entry 3190 (class 2606 OID 17440)
-- Name: trener trener_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trener
    ADD CONSTRAINT trener_pkey PRIMARY KEY (idtrener);


--
-- TOC entry 3191 (class 2606 OID 17425)
-- Name: igra� igra�_idkluba_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."igra�"
    ADD CONSTRAINT "igra�_idkluba_fkey" FOREIGN KEY (idkluba) REFERENCES public.nogometni_klub(idkluba);


--
-- TOC entry 3192 (class 2606 OID 17441)
-- Name: trener trener_idkluba_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trener
    ADD CONSTRAINT trener_idkluba_fkey FOREIGN KEY (idkluba) REFERENCES public.nogometni_klub(idkluba);


-- Completed on 2022-11-01 22:04:59

--
-- PostgreSQL database dump complete
--

