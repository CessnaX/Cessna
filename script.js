const root = document.documentElement;
const cursor = document.querySelector(".cursor");
const cursorTrail = document.querySelector(".cursor--trail");
const clock = document.querySelector(".clock");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = mouseX;
let trailY = mouseY;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  ru: {
    "brand.sub": "Виртуальные услуги",
    "page.title": "CessnaPay — Виртуальные услуги",
    "nav.services": "Услуги",
    "nav.payments": "Оплата",
    "nav.partners": "Партнеры",
    "nav.reviews": "Отзывы",
    "nav.contacts": "Контакты",
    "theme.label": "Тема",
    "hero.eyebrow": "Оплата зарубежных сервисов, подписок и виртуальных товаров",
    "hero.title": "Оформим оплату, когда это сложно сделать самостоятельно.",
    "hero.lead": "Мы помогаем оплачивать зарубежные сервисы через наши карты и банк. Сайт — ознакомительный, все цены и доступность — в Telegram.",
    "hero.ctaOrder": "Оформить заказ",
    "hero.ctaChannel": "Канал CessnaPay",
    "hero.ctaChat": "Отзывы и чат",
    "hero.metaOrder": "Оформление заказа: @CessnaX",
    "hero.metaSupport": "Поддержка: @sapphiremylove",
    "hero.metaPrice": "Прайс и актуальность — в Telegram-канале",
    "hero.stampLabel": "Оплата через банк",
    "hero.stampChip": "Проверено",
    "hero.stampTitle": "Законно",
    "hero.stampSub": "Оплата через наши карты и банк.",
    "hero.pulseTitle": "Быстрый заказ",
    "hero.pulseChip": "Telegram",
    "hero.pulseText": "Напишите в Telegram — ответим и оформим.",
    "hero.pulseLink": "Как оформить",
    "highlights.title": "Почему CessnaPay",
    "highlights.sub": "Коротко о принципах работы и фокусе на безопасности.",
    "highlights.card1.title": "Легально и прозрачно",
    "highlights.card1.text": "Проводим оплату через банк с наших карт.",
    "highlights.card2.title": "Быстрое оформление",
    "highlights.card2.text": "Ответ в Telegram, оформление без лишних шагов.",
    "highlights.card3.title": "Поддержка на связи",
    "highlights.card3.text": "Помогаем с выбором сервиса и варианта оплаты.",
    "services.title": "Что можно оформить",
    "services.sub": "Категории услуг. Полный прайс и актуальные позиции — в Telegram.",
    "services.card1.title": "Оплата зарубежных сервисов",
    "services.card1.text": "Игровые подписки, AI, магазины, цифровые товары.",
    "services.card2.title": "Подписки и подарочные карты",
    "services.card2.text": "Оформляем на ваш аккаунт или выдаем новый.",
    "services.card3.title": "Telegram-решения",
    "services.card3.text": "Premium, Stars, пополнения и другие услуги.",
    "services.card4.title": "Платежные карты",
    "services.card4.text": "Поможем оформить зарубежную карту под задачу.",
    "services.card5.title": "Аккаунты и номера",
    "services.card5.text": "Новые аккаунты и номера для регистрации сервисов.",
    "services.card6.title": "Индивидуальные запросы",
    "services.card6.text": "Если услуги нет в списке — напишите, подберем вариант.",
    "services.ctaOrder": "Оформить заказ",
    "services.ctaChannel": "Канал с прайсом",
    "about.title": "О нас",
    "about.sub": "Кто мы и как развиваем CessnaPay.",
    "about.card1.title": "Кто мы",
    "about.card1.text": "CessnaPay — команда, которая помогает с оплатой зарубежных сервисов, подписок и виртуальных товаров. Мы фокусируемся на аккуратном оформлении, прозрачной коммуникации и быстрой поддержке. Работаем через проверенные каналы и держим клиента в курсе статуса на каждом этапе.",
    "about.card2.title": "История 2025–2026",
    "about.card2.text": "В 2025 мы запустили CessnaPay как ответ на растущий спрос на зарубежные оплаты и подписки. За этот период отстроили процесс подбора решений и формализацию заказов. В 2026 усилили поддержку, добавили чат с отзывами и расширили набор платежных сценариев, чтобы закрывать больше типов запросов и помогать быстрее.",
    "about.card3.title": "Сертификат ЕС",
    "about.card3.text": "Официальный документ о регистрации и работе в ЕС. Можно скачать в формате DOCX.",
    "about.card3.cta": "Открыть сертификат",
    "payments.title": "Способы оплаты",
    "payments.sub": "Часть методов, с которыми чаще всего работаем.",
    "payments.primary": "Основные методы",
    "payments.note": "Актуальные условия и список способов — в Telegram.",
    "partners.title": "Партнерские сервисы",
    "partners.sub": "Сервисы, с которыми сотрудничаем и помогаем с оформлением.",
    "partners.footer": "Проверенные направления 2025–2026",
    "reviews.title": "Отзывы и чат",
    "reviews.sub": "Подтверждения сделок, вопросы и ответы — в Telegram-чате.",
    "reviews.card1.title": "Отзывы и общение",
    "reviews.card1.text": "Живой чат с отзывами и обратной связью.",
    "reviews.card1.cta": "Открыть чат",
    "reviews.card2.title": "Канал с обновлениями",
    "reviews.card2.text": "Новости, доступность услуг, новые предложения.",
    "reviews.card2.cta": "Открыть канал",
    "contact.title": "Оформление заказа",
    "contact.sub": "Пишите в Telegram — ответим быстро и поможем подобрать лучший вариант.",
    "contact.infoTitle": "Как проходит оформление",
    "contact.step1": "Пишите в Telegram, описываете задачу.",
    "contact.step2": "Подбираем вариант оплаты и подтверждаем детали.",
    "contact.step3": "Оформляем и держим связь до результата.",
    "contact.note": "Все цены и доступность — в канале CessnaPay.",
    "contact.connectTitle": "Связаться",
    "contact.sumOrder": "Оформление заказа",
    "contact.btnOrder": "Написать @CessnaX",
    "contact.subOrder": "Быстрый заказ и подбор решения.",
    "contact.sumSupport": "Техническая поддержка",
    "contact.btnSupport": "Поддержка @sapphiremylove",
    "contact.subSupport": "Помощь по оформлению и оплате.",
    "contact.sumChat": "Отзывы и чат",
    "contact.btnChat": "Открыть чат",
    "contact.subChat": "Отзывы и ответы на вопросы.",
    "contact.sumChannel": "Канал CessnaPay",
    "contact.btnChannel": "Открыть канал",
    "contact.subChannel": "Прайс, новости, доступность.",
    "modal.title": "Контакты",
    "modal.sub": "Все каналы связи и рабочие данные.",
    "modal.legalTitle": "Юридическая информация",
    "modal.legal1": "Наименование: CessnaPay Services Kft.",
    "modal.legal2": "Реестр: Cégjegyzékszám 01-09-334512",
    "modal.legal3": "Налоговый номер: 28976341-2-42",
    "modal.legal4": "EU VAT: HU28976341",
    "modal.legal5": "Адрес: 1055 Budapest, Cessna tér 17.",
    "modal.legal6": "Представитель: Bence Kovács, ügyvezető",
    "modal.legal7": "Телефон: +36 30 784 19 52",
    "modal.legal8": "Email: Cessna.pay@gmail.com",
    "dock.order": "Заказать",
    "dock.chat": "Чат",
    "dock.channel": "Канал",
    "footer.privacy": "Политика конфиденциальности",
    "footer.contacts": "Контакты",
    "footer.designed": "Задизайнено в студии cuda",
    "privacy.pageTitle": "CessnaPay — Политика конфиденциальности",
    "privacy.back": "← На главную",
    "privacy.title": "Политика конфиденциальности",
    "privacy.effective": "Действует с 4 февраля 2026",
    "privacy.s1.title": "1. Общие положения",
    "privacy.s1.p1": "Эта политика описывает, как CessnaPay обрабатывает персональные данные при обращении через сайт, Telegram и электронную почту.",
    "privacy.s1.p2": "Оператор данных ведет деятельность в Европейском союзе. Офис расположен в Budapest, Hungary.",
    "privacy.s1.p3": "Если вы используете сторонние платформы, применяются также правила соответствующих сервисов.",
    "privacy.s2.title": "2. Применимое право и стандарты",
    "privacy.s2.p1": "Обработка данных осуществляется в соответствии с применимым правом ЕС, включая GDPR (Regulation (EU) 2016/679), а также законодательством Венгрии.",
    "privacy.s2.p2": "Мы стремимся соблюдать принципы законности, прозрачности, минимизации данных и ограниченного хранения.",
    "privacy.s3.title": "3. Какие данные мы получаем",
    "privacy.s3.li1": "Контактные данные: ник в Telegram, имя, адрес электронной почты.",
    "privacy.s3.li2": "Данные запроса: описание услуги, желаемые сроки, дополнительные условия.",
    "privacy.s3.li3": "История переписки и подтверждения по заказу.",
    "privacy.s3.li4": "Технические данные: IP‑адрес, тип устройства и браузера (в логах хостинга).",
    "privacy.s3.p1": "Мы не запрашиваем и не храним полные данные банковских карт. Не отправляйте конфиденциальные платежные данные в переписке.",
    "privacy.s4.title": "4. Источники данных",
    "privacy.s4.p1": "Данные предоставляются вами напрямую через Telegram, электронную почту и другие официальные каналы связи CessnaPay.",
    "privacy.s4.p2": "Часть технической информации может автоматически фиксироваться хостингом для стабильной работы сайта.",
    "privacy.s5.title": "5. Цели обработки",
    "privacy.s5.li1": "Ответ на запрос и подбор решения.",
    "privacy.s5.li2": "Оформление заказа и информирование о статусе.",
    "privacy.s5.li3": "Поддержка и обратная связь.",
    "privacy.s5.li4": "Соблюдение требований закона и предотвращение мошенничества.",
    "privacy.s6.title": "6. Правовые основания (GDPR)",
    "privacy.s6.li1": "Согласие пользователя на обработку (Art. 6(1)(a)).",
    "privacy.s6.li2": "Исполнение договора или запросов до заключения договора (Art. 6(1)(b)).",
    "privacy.s6.li3": "Юридические обязанности оператора (Art. 6(1)(c)).",
    "privacy.s6.li4": "Законные интересы оператора (Art. 6(1)(f)) — безопасность и предотвращение злоупотреблений.",
    "privacy.s7.title": "7. Передача данных третьим лицам",
    "privacy.s7.p1": "Мы можем передавать данные партнерам и провайдерам, если это необходимо для исполнения вашего запроса или соблюдения закона.",
    "privacy.s7.p2": "Используемые платформы (Telegram, почтовые сервисы, хостинг) обрабатывают данные по своим правилам.",
    "privacy.s8.title": "8. Международные передачи",
    "privacy.s8.p1": "Если сервисы располагаются за пределами ЕЭЗ, передача данных осуществляется при наличии правовых гарантий (например, стандартных договорных условий).",
    "privacy.s8.p2": "Мы минимизируем объем передаваемых данных и выбираем надежных поставщиков.",
    "privacy.s9.title": "9. Сроки хранения",
    "privacy.s9.p1": "Данные хранятся только столько времени, сколько необходимо для выполнения запроса, поддержки и соблюдения юридических требований.",
    "privacy.s9.p2": "После закрытия запроса мы можем удалить переписку и связанные данные.",
    "privacy.s10.title": "10. Безопасность",
    "privacy.s10.p1": "Мы применяем разумные организационные и технические меры для защиты данных, включая ограничение доступа и регулярный контроль.",
    "privacy.s10.p2": "Передача данных через интернет не может быть гарантирована на 100% — пожалуйста, передавайте только необходимые сведения.",
    "privacy.s11.title": "11. Ваши права",
    "privacy.s11.li1": "Запросить доступ к данным и получить копию.",
    "privacy.s11.li2": "Исправить или обновить информацию.",
    "privacy.s11.li3": "Потребовать удаление, ограничение обработки или возражать.",
    "privacy.s11.li4": "Переносимость данных (если применимо).",
    "privacy.s11.li5": "Отозвать согласие в любой момент.",
    "privacy.s11.p1": "Вы также вправе обратиться в надзорный орган по защите данных вашей страны. В Венгрии — NAIH.",
    "privacy.s12.title": "12. Cookies и аналитика",
    "privacy.s12.p1": "Мы не используем рекламные или аналитические cookies. Сайт не устанавливает сторонние трекеры.",
    "privacy.s12.p2": "Технические журналы хостинга могут вести учет посещений для обеспечения стабильной работы.",
    "privacy.s13.title": "13. Изменения политики",
    "privacy.s13.p1": "Мы можем обновлять политику при изменении процессов или требований закона.",
    "privacy.s13.p2": "Новая редакция вступает в силу с момента публикации на сайте.",
    "privacy.contact.title": "Контакты по вопросам данных",
    "privacy.contact.p1": "Если нужно уточнить, изменить или удалить данные, напишите нам."
  },
  en: {
    "brand.sub": "Virtual services",
    "page.title": "CessnaPay — Virtual Services",
    "nav.services": "Services",
    "nav.payments": "Payments",
    "nav.partners": "Partners",
    "nav.reviews": "Reviews",
    "nav.contacts": "Contacts",
    "theme.label": "Theme",
    "hero.eyebrow": "Payments for foreign services, subscriptions and digital goods",
    "hero.title": "We process payments when it’s hard to do it yourself.",
    "hero.lead": "We help pay for foreign services via our cards and bank. This site is informational; all prices and availability are in Telegram.",
    "hero.ctaOrder": "Place an order",
    "hero.ctaChannel": "CessnaPay Channel",
    "hero.ctaChat": "Reviews & Chat",
    "hero.metaOrder": "Order: @CessnaX",
    "hero.metaSupport": "Support: @sapphiremylove",
    "hero.metaPrice": "Pricing and availability — in the Telegram channel",
    "hero.stampLabel": "Bank transfer",
    "hero.stampChip": "Verified",
    "hero.stampTitle": "Legal",
    "hero.stampSub": "Payment through our cards and bank.",
    "hero.pulseTitle": "Fast order",
    "hero.pulseChip": "Telegram",
    "hero.pulseText": "Message us in Telegram — we’ll reply and process.",
    "hero.pulseLink": "How it works",
    "highlights.title": "Why CessnaPay",
    "highlights.sub": "Key principles and focus on safety.",
    "highlights.card1.title": "Legal and transparent",
    "highlights.card1.text": "Payments via bank using our cards.",
    "highlights.card2.title": "Fast processing",
    "highlights.card2.text": "Reply in Telegram, no extra steps.",
    "highlights.card3.title": "Support available",
    "highlights.card3.text": "We help choose the service and payment option.",
    "services.title": "What we can arrange",
    "services.sub": "Service categories. Full price list and availability — in Telegram.",
    "services.card1.title": "Payments for foreign services",
    "services.card1.text": "Gaming subscriptions, AI, stores, digital goods.",
    "services.card2.title": "Subscriptions & gift cards",
    "services.card2.text": "We set up on your account or provide a new one.",
    "services.card3.title": "Telegram solutions",
    "services.card3.text": "Premium, Stars, top-ups and other services.",
    "services.card4.title": "Payment cards",
    "services.card4.text": "We help issue a foreign card for your needs.",
    "services.card5.title": "Accounts and numbers",
    "services.card5.text": "New accounts and numbers for registration.",
    "services.card6.title": "Custom requests",
    "services.card6.text": "If it’s not listed — message us, we’ll find a solution.",
    "services.ctaOrder": "Place an order",
    "services.ctaChannel": "Price channel",
    "about.title": "About us",
    "about.sub": "Who we are and how we grow CessnaPay.",
    "about.card1.title": "Who we are",
    "about.card1.text": "CessnaPay is a team that helps pay for foreign services, subscriptions and digital goods. We focus on careful processing, transparent communication and fast support. We work through trusted channels and keep clients updated at every step.",
    "about.card2.title": "Story 2025–2026",
    "about.card2.text": "In 2025 we launched CessnaPay in response to growing demand for foreign payments and subscriptions. We refined solution matching and order workflow. In 2026 we strengthened support, added a reviews chat and expanded payment scenarios to cover more request types faster.",
    "about.card3.title": "EU Certificate",
    "about.card3.text": "Official document confirming EU registration and operations. Available as a DOCX download.",
    "about.card3.cta": "Open certificate",
    "payments.title": "Payment methods",
    "payments.sub": "Methods we most often use.",
    "payments.primary": "Main methods",
    "payments.note": "Current conditions and full list — in Telegram.",
    "partners.title": "Partner services",
    "partners.sub": "Services we collaborate with and help to set up.",
    "partners.footer": "Trusted directions 2025–2026",
    "reviews.title": "Reviews & chat",
    "reviews.sub": "Deal confirmations, questions and answers — in Telegram chat.",
    "reviews.card1.title": "Reviews & communication",
    "reviews.card1.text": "Live chat with reviews and feedback.",
    "reviews.card1.cta": "Open chat",
    "reviews.card2.title": "Updates channel",
    "reviews.card2.text": "News, availability, new offers.",
    "reviews.card2.cta": "Open channel",
    "contact.title": "Order process",
    "contact.sub": "Write in Telegram — we reply fast and help choose the best option.",
    "contact.infoTitle": "How it works",
    "contact.step1": "Message us in Telegram and describe your request.",
    "contact.step2": "We suggest a payment option and confirm details.",
    "contact.step3": "We process it and keep in touch until done.",
    "contact.note": "All prices and availability — in the CessnaPay channel.",
    "contact.connectTitle": "Get in touch",
    "contact.sumOrder": "Order",
    "contact.btnOrder": "Message @CessnaX",
    "contact.subOrder": "Fast order and matching solution.",
    "contact.sumSupport": "Technical support",
    "contact.btnSupport": "Support @sapphiremylove",
    "contact.subSupport": "Help with ordering and payment.",
    "contact.sumChat": "Reviews & chat",
    "contact.btnChat": "Open chat",
    "contact.subChat": "Reviews and Q&A.",
    "contact.sumChannel": "CessnaPay channel",
    "contact.btnChannel": "Open channel",
    "contact.subChannel": "Prices, news, availability.",
    "modal.title": "Contacts",
    "modal.sub": "Legal and official details.",
    "modal.legalTitle": "Legal information",
    "modal.legal1": "Legal name: CessnaPay Services Kft.",
    "modal.legal2": "Registry: Cégjegyzékszám 01-09-334512",
    "modal.legal3": "Tax number: 28976341-2-42",
    "modal.legal4": "EU VAT: HU28976341",
    "modal.legal5": "Address: 1055 Budapest, Cessna tér 17.",
    "modal.legal6": "Representative: Bence Kovács, managing director",
    "modal.legal7": "Phone: +36 30 784 19 52",
    "modal.legal8": "Email: Cessna.pay@gmail.com",
    "dock.order": "Order",
    "dock.chat": "Chat",
    "dock.channel": "Channel",
    "footer.privacy": "Privacy policy",
    "footer.contacts": "Contacts",
    "footer.designed": "Designed in cuda studio",
    "privacy.pageTitle": "CessnaPay — Privacy Policy",
    "privacy.back": "← Back to home",
    "privacy.title": "Privacy Policy",
    "privacy.effective": "Effective from February 4, 2026",
    "privacy.s1.title": "1. General Provisions",
    "privacy.s1.p1": "This policy describes how CessnaPay processes personal data when you contact us via the website, Telegram, or email.",
    "privacy.s1.p2": "The data controller operates within the European Union. The office is located in Budapest, Hungary.",
    "privacy.s1.p3": "If you use third-party platforms, their rules also apply.",
    "privacy.s2.title": "2. Applicable Law and Standards",
    "privacy.s2.p1": "Data processing is carried out under applicable EU law, including the GDPR (Regulation (EU) 2016/679), and Hungarian legislation.",
    "privacy.s2.p2": "We follow the principles of lawfulness, transparency, data minimization, and storage limitation.",
    "privacy.s3.title": "3. Data We Receive",
    "privacy.s3.li1": "Contact data: Telegram handle, name, email address.",
    "privacy.s3.li2": "Request data: service description, desired timing, additional conditions.",
    "privacy.s3.li3": "Correspondence history and order confirmations.",
    "privacy.s3.li4": "Technical data: IP address, device and browser type (in hosting logs).",
    "privacy.s3.p1": "We do not request or store full card details. Do not send sensitive payment data in messages.",
    "privacy.s4.title": "4. Sources of Data",
    "privacy.s4.p1": "You provide data directly through Telegram, email, and other official CessnaPay channels.",
    "privacy.s4.p2": "Some technical information may be logged automatically by hosting for site stability.",
    "privacy.s5.title": "5. Purposes of Processing",
    "privacy.s5.li1": "Responding to requests and proposing a solution.",
    "privacy.s5.li2": "Order placement and status updates.",
    "privacy.s5.li3": "Support and feedback.",
    "privacy.s5.li4": "Legal compliance and fraud prevention.",
    "privacy.s6.title": "6. Legal Bases (GDPR)",
    "privacy.s6.li1": "User consent (Art. 6(1)(a)).",
    "privacy.s6.li2": "Performance of a contract or pre-contract steps (Art. 6(1)(b)).",
    "privacy.s6.li3": "Legal obligations of the controller (Art. 6(1)(c)).",
    "privacy.s6.li4": "Legitimate interests (Art. 6(1)(f)) — security and abuse prevention.",
    "privacy.s7.title": "7. Disclosure to Third Parties",
    "privacy.s7.p1": "We may share data with partners and providers where necessary to fulfill your request or comply with the law.",
    "privacy.s7.p2": "Platforms used (Telegram, email services, hosting) process data under their own rules.",
    "privacy.s8.title": "8. International Transfers",
    "privacy.s8.p1": "If services are located outside the EEA, transfers are made with appropriate safeguards (e.g., standard contractual clauses).",
    "privacy.s8.p2": "We minimize the scope of transferred data and choose reliable providers.",
    "privacy.s9.title": "9. Retention",
    "privacy.s9.p1": "Data is kept only as long as needed for the request, support, and legal requirements.",
    "privacy.s9.p2": "After a request is closed, we may delete correspondence and related data.",
    "privacy.s10.title": "10. Security",
    "privacy.s10.p1": "We apply reasonable organizational and technical measures, including access restrictions and periodic review.",
    "privacy.s10.p2": "Internet transmission cannot be guaranteed 100% — please share only necessary data.",
    "privacy.s11.title": "11. Your Rights",
    "privacy.s11.li1": "Request access and obtain a copy.",
    "privacy.s11.li2": "Correct or update information.",
    "privacy.s11.li3": "Request deletion, restriction, or object.",
    "privacy.s11.li4": "Data portability (where applicable).",
    "privacy.s11.li5": "Withdraw consent at any time.",
    "privacy.s11.p1": "You may also contact your national supervisory authority. In Hungary — the NAIH.",
    "privacy.s12.title": "12. Cookies and Analytics",
    "privacy.s12.p1": "We do not use advertising or analytics cookies. The site does not set third-party trackers.",
    "privacy.s12.p2": "Hosting technical logs may record visits for stability.",
    "privacy.s13.title": "13. Policy Changes",
    "privacy.s13.p1": "We may update the policy when processes or legal requirements change.",
    "privacy.s13.p2": "A new version takes effect upon publication on the site.",
    "privacy.contact.title": "Data Protection Contacts",
    "privacy.contact.p1": "If you need to clarify, update, or delete data, contact us."
  },
  zh: {
    "brand.sub": "虚拟服务",
    "page.title": "CessnaPay — 虚拟服务",
    "nav.services": "服务",
    "nav.payments": "支付",
    "nav.partners": "合作",
    "nav.reviews": "评价",
    "nav.contacts": "联系方式",
    "theme.label": "主题",
    "hero.eyebrow": "海外服务、订阅与虚拟商品支付",
    "hero.title": "当你难以自行支付时，我们来帮你完成。",
    "hero.lead": "我们通过自有卡和银行渠道帮助支付海外服务。本网站仅作展示，价格与可用性以 Telegram 为准。",
    "hero.ctaOrder": "下单咨询",
    "hero.ctaChannel": "CessnaPay 频道",
    "hero.ctaChat": "评价与聊天",
    "hero.metaOrder": "下单：@CessnaX",
    "hero.metaSupport": "支持：@sapphiremylove",
    "hero.metaPrice": "价格与可用性 — 见 Telegram 频道",
    "hero.stampLabel": "银行支付",
    "hero.stampChip": "已验证",
    "hero.stampTitle": "合规",
    "hero.stampSub": "通过我们的卡和银行完成支付。",
    "hero.pulseTitle": "快速下单",
    "hero.pulseChip": "Telegram",
    "hero.pulseText": "在 Telegram 联系我们 — 立即回复并处理。",
    "hero.pulseLink": "如何办理",
    "highlights.title": "为什么选择 CessnaPay",
    "highlights.sub": "核心原则与安全保障。",
    "highlights.card1.title": "合规透明",
    "highlights.card1.text": "通过银行与自有卡完成支付。",
    "highlights.card2.title": "快速办理",
    "highlights.card2.text": "Telegram 快速回复，流程简洁。",
    "highlights.card3.title": "实时支持",
    "highlights.card3.text": "协助选择服务与支付方案。",
    "services.title": "可办理项目",
    "services.sub": "服务类别。完整价格与可用性以 Telegram 为准。",
    "services.card1.title": "海外服务支付",
    "services.card1.text": "游戏订阅、AI、商店与数字商品。",
    "services.card2.title": "订阅与礼品卡",
    "services.card2.text": "可绑定你的账号或提供新账号。",
    "services.card3.title": "Telegram 服务",
    "services.card3.text": "Premium、Stars、充值等。",
    "services.card4.title": "支付卡",
    "services.card4.text": "协助办理符合需求的海外卡。",
    "services.card5.title": "账号与号码",
    "services.card5.text": "提供新账号与注册号码。",
    "services.card6.title": "定制需求",
    "services.card6.text": "列表之外也可咨询，我们会给出方案。",
    "services.ctaOrder": "下单",
    "services.ctaChannel": "价格频道",
    "about.title": "关于我们",
    "about.sub": "我们是谁，以及如何发展 CessnaPay。",
    "about.card1.title": "我们是谁",
    "about.card1.text": "CessnaPay 团队帮助完成海外服务、订阅与虚拟商品支付。我们强调流程清晰、沟通透明、支持及时。通过可靠渠道办理，并在全流程同步进度。",
    "about.card2.title": "历程 2025–2026",
    "about.card2.text": "2025 年启动 CessnaPay 以回应海外支付需求。期间完善方案匹配与订单流程。2026 年加强支持，建立评价聊天，并扩展支付场景，覆盖更多需求。",
    "about.card3.title": "欧盟证书",
    "about.card3.text": "证明在欧盟注册与运营的官方文件，可下载 DOCX。",
    "about.card3.cta": "查看证书",
    "payments.title": "支付方式",
    "payments.sub": "我们最常用的方式。",
    "payments.primary": "主要方式",
    "payments.note": "最新条件与完整方式清单请看 Telegram。",
    "partners.title": "合作服务",
    "partners.sub": "我们合作并协助办理的服务。",
    "partners.footer": "可信方向 2025–2026",
    "reviews.title": "评价与聊天",
    "reviews.sub": "交易反馈、问题与解答 — 在 Telegram 聊天。",
    "reviews.card1.title": "评价与交流",
    "reviews.card1.text": "真实反馈与交流讨论。",
    "reviews.card1.cta": "打开聊天",
    "reviews.card2.title": "更新频道",
    "reviews.card2.text": "新闻、可用性与新方案。",
    "reviews.card2.cta": "打开频道",
    "contact.title": "下单流程",
    "contact.sub": "在 Telegram 联系我们 — 快速回复并给出最佳方案。",
    "contact.infoTitle": "办理流程",
    "contact.step1": "在 Telegram 说明需求。",
    "contact.step2": "确认支付方案与细节。",
    "contact.step3": "完成办理并跟进结果。",
    "contact.note": "价格与可用性以 CessnaPay 频道为准。",
    "contact.connectTitle": "联系",
    "contact.sumOrder": "下单",
    "contact.btnOrder": "联系 @CessnaX",
    "contact.subOrder": "快速下单与方案匹配。",
    "contact.sumSupport": "技术支持",
    "contact.btnSupport": "支持 @sapphiremylove",
    "contact.subSupport": "订单与支付协助。",
    "contact.sumChat": "评价与聊天",
    "contact.btnChat": "打开聊天",
    "contact.subChat": "评价与问答。",
    "contact.sumChannel": "CessnaPay 频道",
    "contact.btnChannel": "打开频道",
    "contact.subChannel": "价格、新闻、可用性。",
    "modal.title": "联系方式",
    "modal.sub": "法律与官方信息。",
    "modal.legalTitle": "法律信息",
    "modal.legal1": "公司名称：CessnaPay Services Kft.",
    "modal.legal2": "注册号：Cégjegyzékszám 01-09-334512",
    "modal.legal3": "税号：28976341-2-42",
    "modal.legal4": "EU VAT：HU28976341",
    "modal.legal5": "地址：1055 Budapest, Cessna tér 17.",
    "modal.legal6": "代表人：Bence Kovács，经理",
    "modal.legal7": "电话：+36 30 784 19 52",
    "modal.legal8": "邮箱：Cessna.pay@gmail.com",
    "dock.order": "下单",
    "dock.chat": "聊天",
    "dock.channel": "频道",
    "footer.privacy": "隐私政策",
    "footer.contacts": "联系方式",
    "footer.designed": "由 cuda 工作室设计",
    "privacy.pageTitle": "CessnaPay — 隐私政策",
    "privacy.back": "← 返回首页",
    "privacy.title": "隐私政策",
    "privacy.effective": "生效日期：2026年2月4日",
    "privacy.s1.title": "1. 总则",
    "privacy.s1.p1": "本政策说明 CessnaPay 在通过网站、Telegram 或电子邮件与您联系时如何处理个人数据。",
    "privacy.s1.p2": "数据控制方在欧盟境内运营，办公室位于匈牙利布达佩斯。",
    "privacy.s1.p3": "如使用第三方平台，其自身规则同样适用。",
    "privacy.s2.title": "2. 适用法律与标准",
    "privacy.s2.p1": "数据处理依据欧盟法律（包括 GDPR《欧盟条例 2016/679》）及匈牙利法律。",
    "privacy.s2.p2": "我们遵循合法、透明、数据最小化与存储期限限制原则。",
    "privacy.s3.title": "3. 我们获取的数据",
    "privacy.s3.li1": "联系信息：Telegram 用户名、姓名、邮箱。",
    "privacy.s3.li2": "请求信息：服务描述、期望时间、附加条件。",
    "privacy.s3.li3": "沟通记录与订单确认。",
    "privacy.s3.li4": "技术信息：IP 地址、设备与浏览器类型（托管日志）。",
    "privacy.s3.p1": "我们不索取也不保存完整的银行卡信息。请勿在聊天中发送敏感支付数据。",
    "privacy.s4.title": "4. 数据来源",
    "privacy.s4.p1": "您通过 Telegram、电子邮件等 CessnaPay 官方渠道直接提供数据。",
    "privacy.s4.p2": "为保证网站稳定，托管服务可能自动记录部分技术信息。",
    "privacy.s5.title": "5. 处理目的",
    "privacy.s5.li1": "回应需求并提供方案。",
    "privacy.s5.li2": "下单处理与状态通知。",
    "privacy.s5.li3": "支持与反馈。",
    "privacy.s5.li4": "遵守法律要求并防止欺诈。",
    "privacy.s6.title": "6. 法律依据（GDPR）",
    "privacy.s6.li1": "用户同意（第6条第1款(a)）。",
    "privacy.s6.li2": "履行合同或合同前请求（第6条第1款(b)）。",
    "privacy.s6.li3": "法律义务（第6条第1款(c)）。",
    "privacy.s6.li4": "合法利益（第6条第1款(f)）— 安全与防滥用。",
    "privacy.s7.title": "7. 向第三方披露",
    "privacy.s7.p1": "在履行请求或法律要求时，我们可能向合作伙伴与服务提供商披露数据。",
    "privacy.s7.p2": "所使用的平台（Telegram、邮件服务、托管）按其规则处理数据。",
    "privacy.s8.title": "8. 跨境传输",
    "privacy.s8.p1": "如服务位于欧洲经济区以外，将基于适当保障措施进行传输（如标准合同条款）。",
    "privacy.s8.p2": "我们尽量减少传输范围并选择可靠供应商。",
    "privacy.s9.title": "9. 保存期限",
    "privacy.s9.p1": "数据仅在完成请求、支持及符合法律要求所需期限内保存。",
    "privacy.s9.p2": "请求关闭后，我们可能删除对话记录及相关数据。",
    "privacy.s10.title": "10. 安全",
    "privacy.s10.p1": "我们采取合理的组织与技术措施，包括访问限制与定期审核。",
    "privacy.s10.p2": "互联网传输无法做到 100% 安全，请仅提供必要信息。",
    "privacy.s11.title": "11. 您的权利",
    "privacy.s11.li1": "请求访问并获取副本。",
    "privacy.s11.li2": "更正或更新信息。",
    "privacy.s11.li3": "要求删除、限制处理或提出异议。",
    "privacy.s11.li4": "数据可携权（适用时）。",
    "privacy.s11.li5": "随时撤回同意。",
    "privacy.s11.p1": "您也可向所在国家监管机构投诉。在匈牙利为 NAIH。",
    "privacy.s12.title": "12. Cookies 与分析",
    "privacy.s12.p1": "我们不使用广告或分析类 cookies，也不设置第三方跟踪器。",
    "privacy.s12.p2": "托管技术日志可能记录访问以确保稳定。",
    "privacy.s13.title": "13. 政策变更",
    "privacy.s13.p1": "当流程或法律要求变化时，我们可能更新本政策。",
    "privacy.s13.p2": "新版本自网站发布之日起生效。",
    "privacy.contact.title": "数据相关联系",
    "privacy.contact.p1": "如需咨询、修改或删除数据，请联系我们。"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const langSwitches = document.querySelectorAll(".lang-switch");
const themeToggles = document.querySelectorAll("[data-theme-toggle]");
let currentLang = "ru";
let langSwitchTimeout;
let currentTheme = "light";

const applyTheme = (theme) => {
  document.body?.classList.toggle("theme-dark", theme === "dark");
  themeToggles.forEach((button) => {
    button.classList.toggle("is-dark", theme === "dark");
  });
};

const detectTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

const setLangIndicator = (lang) => {
  langSwitches.forEach((switcher) => {
    const buttons = Array.from(switcher.querySelectorAll(".lang-btn"));
    const index = buttons.findIndex((button) => button.dataset.lang === lang);
    if (index >= 0) {
      const styles = getComputedStyle(switcher);
      const pad = parseFloat(styles.getPropertyValue("--lang-pad")) || 4;
      const totalWidth = Math.max(0, switcher.clientWidth - pad * 2);
      const segment = totalWidth / Math.max(1, buttons.length);
      switcher.style.setProperty("--lang-width", `${segment}px`);
      switcher.style.setProperty("--lang-offset", `${segment * index}px`);
      switcher.classList.remove("is-animating");
      void switcher.offsetWidth;
      switcher.classList.add("is-animating");
    }
  });
};

const applyLanguage = (lang) => {
  const dict = translations[lang] || translations.ru;
  const updateText = () => {
    i18nNodes.forEach((node) => {
      const key = node.dataset.i18n;
      const value = dict[key] ?? translations.ru[key];
      if (value) {
        node.textContent = value;
      }
    });
  };

  if (!reduceMotion && document.body && document.body.classList.contains("lang-ready")) {
    document.body.classList.add("lang-switching");
    if (langSwitchTimeout) {
      clearTimeout(langSwitchTimeout);
    }
    langSwitchTimeout = window.setTimeout(() => {
      updateText();
      requestAnimationFrame(() => {
        document.body.classList.remove("lang-switching");
      });
    }, 140);
  } else {
    updateText();
  }

  langButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === "zh" ? "zh" : lang;
  setLangIndicator(lang);
};

const detectLanguage = () => {
  const stored = localStorage.getItem("lang");
  if (stored && translations[stored]) return stored;
  const browser = (navigator.language || "ru").toLowerCase();
  if (browser.startsWith("en")) return "en";
  if (browser.startsWith("zh")) return "zh";
  return "ru";
};

  currentTheme = detectTheme();
  applyTheme(currentTheme);
  currentLang = detectLanguage();
  applyLanguage(currentLang);
  requestAnimationFrame(() => {
    document.body?.classList.add("lang-ready");
  });

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem("lang", lang);
      currentLang = lang;
      applyLanguage(lang);
    });
  });

  themeToggles.forEach((button) => {
    button.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", currentTheme);
      applyTheme(currentTheme);
    });
  });

  window.addEventListener("resize", () => {
    setLangIndicator(currentLang);
  });

function setMouse(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  root.style.setProperty("--mx", mouseX + "px");
  root.style.setProperty("--my", mouseY + "px");
  if (cursor) {
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  }
}

function animateTrail() {
  if (cursorTrail) {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;
    cursorTrail.style.left = trailX + "px";
    cursorTrail.style.top = trailY + "px";
  }
  if (!reduceMotion) {
    requestAnimationFrame(animateTrail);
  }
}

if (!reduceMotion) {
  window.addEventListener("mousemove", setMouse);
  animateTrail();
}

if (clock) {
  const updateClock = () => {
    const now = new Date();
    const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
    const minutes = now.getMinutes() + seconds / 60;
    const hours = (now.getHours() % 12) + minutes / 60;
    clock.style.setProperty("--clock-second", `${seconds * 6}deg`);
    clock.style.setProperty("--clock-minute", `${minutes * 6}deg`);
    clock.style.setProperty("--clock-hour", `${hours * 30}deg`);
  };

  updateClock();
  const interval = reduceMotion ? 60000 : 1000;
  setInterval(updateClock, interval);
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

const accordionItems = document.querySelectorAll(".contact-accordion details");
accordionItems.forEach((detail) => {
  const summary = detail.querySelector("summary");
  if (!summary) return;

  summary.addEventListener("click", (event) => {
    event.preventDefault();
    if (detail.dataset.animating === "1") return;

    if (reduceMotion) {
      detail.open = !detail.open;
      return;
    }

    const styles = getComputedStyle(detail);
    const padding = parseFloat(styles.paddingTop) + parseFloat(styles.paddingBottom);
    const closedHeight = summary.offsetHeight + padding;

    if (detail.open) {
      detail.dataset.animating = "1";
      detail.classList.add("is-closing");
      detail.style.height = `${detail.scrollHeight}px`;
      requestAnimationFrame(() => {
        detail.style.height = `${closedHeight}px`;
      });

      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        detail.open = false;
        detail.classList.remove("is-closing");
        detail.style.height = "";
        detail.dataset.animating = "";
        detail.removeEventListener("transitionend", onEnd);
      };
      detail.addEventListener("transitionend", onEnd);
    } else {
      detail.dataset.animating = "1";
      detail.open = true;
      detail.style.height = `${closedHeight}px`;
      requestAnimationFrame(() => {
        detail.style.height = `${detail.scrollHeight}px`;
      });

      const onEnd = (e) => {
        if (e.propertyName !== "height") return;
        detail.style.height = "";
        detail.dataset.animating = "";
        detail.removeEventListener("transitionend", onEnd);
      };
      detail.addEventListener("transitionend", onEnd);
    }
  });
});

const contactModal = document.getElementById("contact-modal");
const contactTriggers = document.querySelectorAll("[data-contact-modal]");

if (contactModal && contactTriggers.length) {
  const openModal = () => {
    contactModal.classList.add("is-open");
    contactModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    contactModal.classList.remove("is-open");
    contactModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  contactTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      openModal();
    });
  });

  contactModal.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      closeModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contactModal.classList.contains("is-open")) {
      closeModal();
    }
  });
}


const tiltItems = document.querySelectorAll(".tilt");
const tiltMax = 8;

if (!reduceMotion) {
  tiltItems.forEach((item) => {
    item.addEventListener("mousemove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rx = ((y / rect.height) - 0.5) * -tiltMax;
      const ry = ((x / rect.width) - 0.5) * tiltMax;
      item.style.setProperty("--rx", rx.toFixed(2) + "deg");
      item.style.setProperty("--ry", ry.toFixed(2) + "deg");
    });

    item.addEventListener("mouseleave", () => {
      item.style.setProperty("--rx", "0deg");
      item.style.setProperty("--ry", "0deg");
    });
  });
}

