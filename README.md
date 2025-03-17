# React + TypeScript + Vite

Uruchom `npm install` i `npm run dev` żeby wystartować aplikację.

# Komentarz do Architektury Aplikacji

Layout wydawał się bardzo prosty, dlatego chciałem jak najwięcej zrobić w czystym Reactcie bez instalowania dodatkowych paczek. Chciałem też pokazać, że rozumiem, jakie gotowe paczki rozwiązują konkretne problemy – normalnie nigdy nie tworzyłbym wszystkiego od zera w aplikacji produkcyjnej. Poniżej opisuję, czego bym użył do tego zadania i dlaczego:

1. **Gotowe Biblioteki i Narzędzia (Wersja Produkcyjna)**

   - **Tailwind + Shadcn**: Do stylowania użyłbym Tailwind CSS oraz Shadcn UI. Shadcn importuje tylko te komponenty, które są potrzebne, a jednocześnie oferuje gotowe rozwiązania pod kątem accessibility, wariantów oraz obsługi stanów (focus, hover, disabled itp.). Dzięki temu można w bardzo krótkim czasie, nawet w 1h, stworzyć kompletny formularz, korzystający z react-hook-form i ZOD do walidacji.
   - **React-hook-form** bardzo lekka i szybka biblioteka. -**ZOD** oparta na TS biblioteka do walidacji schemy formularza.
   - **Zustand**: Do zarządzania stanem aplikacji użyłbym Zustanda. To lekka i bardzo szybka biblioteka, która wykorzystuje architekturę Reduxa, ale cały store (z akcjami oraz zapisem do localStorage) można zaimplementować w jednym pliku w około 20 linijkach kodu. To dodatkowe 15 minut pracy, ale zapewnia czysty i skalowalny kod.

2. **Decyzje w TYM Projekcie**
   - **Prostota i czytelność**: W tym zadaniu postawiłem na czysty React, wykorzystując Context API i własne hooki. Wiem, że w rzeczywistym projekcie skorzystałbym z wymienionych wcześniej bibliotek, ale celem było pokazanie, jak samodzielnie rozwiązać problemy.
   - **Struktura projektu**:
     - **Components**: Ogólne komponenty UI (bez logiki biznesowej) znajdują się w folderze `components`.
     - **Store**: Globalne zarządzanie stanem, imitujące architekturę Reduxa, jest realizowane przy pomocy Context API i umieszczone w folderze `store`.
     - **Features**: Wszystko, co dotyczy użytkowników, umieściłem w katalogu `features/user` – na wzór Domain Driven Development.
     - **Hooks**: Uniwersalne hooki, jak np. `useFormHook` obsługujący całą logikę formularza, znajdują się w folderze `hooks`.
     - **Utils**: Wszystkie pomocnicze funkcje JavaScript zostały umieszczone w folderze `utils`.
   - **Style**:
     - Zdecydowałem się na użycie czystego CSS (CSS Modules) zamiast rozwiązań opartych na JavaScript do stylowania, gdyż React + Vite obsługuje CSS Modules bez żadnej dodatkowej konfiguracji. Chociaż dynamiczne style oparte na propsach mogą być uciążliwe, prostota i przewidywalność czystego CSS były tu kluczowe. Sprawdziłem na stronie x-komu jak zaimplementowane są labele z użyciem gradientu jako tła. Jak kiedyś podobną rzecz robiłem na wzór MaterialUI z użyciem fieldset. Ale nie oto chodziło chyba w zadaniu.
   - **Formularz**:
     - Stworzyłem dedykowany hook, który obsługuje konkretny scenariusz formularza. Nie jest to rozwiązanie "szwajcarskiego scyzoryka" – jest to proste rozwiązanie odpowiadające na konkretne potrzeby. I sygnalizujące tylko na co warto zwrócić uwagę. Przez ograniczony czas wszystko jest uproszczone i na pewno są rzeczy których nie uwzględniłem. Już na samym początku zdecydowałem, że inputy mają być kontrolowane.
     - Implementacja walidacji jest nieco naiwna i obsługuje tylko kilka przypadków, ale to celowy kompromis – pokazuje, że wszystko można napisać "z palca".
     - Dodałem także symulację walidacji po stronie serwera, żeby wykluczyć duplikaty email i pokazać, że ważna jest walidacja na kliencie i na serwerze.

- **Stan Aplikacji**
  - Do obsługi całej aplikacji wystarczyłby jeden `useState` w komponencie `<UsersSection>`. Chciałem pokazać,że znam Reduxa ale nie chciałem instalować i setupować go w tym projekcie.
  - Na końcu i tak wszystko wrzuciłem do jednego katalogu razem z obsługą `localeStorage`. Spokojnie mogła by to być wydzielona osobna warstwa aplikacji.

Podsumowując, chociaż rozwiązanie stworzone "od zera" zajęło więcej niż myślałem oraz zwiększyło skomplikowanie projektu to chciałem pokazać zrozumienie tematu oraz swoje decyzje. W prawdziwym projekcie korzystałbym z zaawansowanych bibliotek i gotowych baz komponentów, aby skrócić czas developmentu i zwiększyć skalowalność oraz dostępność aplikacji.
