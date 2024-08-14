# DigiMedic - Digitální páteř českého zdravotnictví

DigiMedic je inovativní platforma zaměřená na digitalizaci a optimalizaci procesů ve zdravotnictví. Naším cílem je přinášet efektivitu, přesnost a lepší péči o pacienty.

## Projektový Brief

### Vize
Stát se vedoucí digitální platformou v českém zdravotnictví, která propojuje zdravotnická zařízení, pacienty a poskytovatele zdravotní péče, a tím zlepšuje kvalitu a dostupnost zdravotní péče.

### Mise
Poskytovat inovativní technologická řešení, která zefektivňují procesy ve zdravotnictví, snižují administrativní zátěž a umožňují zdravotnickým pracovníkům soustředit se na to nejdůležitější - péči o pacienty.

### Cílová skupina
- Zdravotnická zařízení (nemocnice, kliniky, ambulance)
- Zdravotničtí pracovníci (lékaři, sestry, administrativní personál)
- Pacienti
- Zdravotní pojišťovny
- Státní instituce v oblasti zdravotnictví

### Klíčové funkce
1. Digitalizace zdravotnické dokumentace
2. Telemedicína a vzdálené konzultace
3. Optimalizace procesů a workflow ve zdravotnických zařízeních
4. Analýza zdravotnických dat pro lepší rozhodování
5. Bezpečné sdílení informací mezi poskytovateli zdravotní péče
6. Vizualizace stakeholderů pomocí OrbitingCircles komponenty
7. Prezentace partnerských log s použitím StakeholderOrbitingLogos

## Roadmapa

### Fáze 1: Základní infrastruktura (Q3 2024)
- [x] Vytvoření základní webové prezentace
- [ ] Implementace systému pro správu uživatelů a přístupových práv
- [ ] Vývoj API pro integraci s existujícími nemocničními systémy

### Fáze 2: Klíčové funkce (Q4 2024 - Q1 2025)
- [ ] Implementace modulu pro digitalizaci zdravotnické dokumentace
- [ ] Vývoj platformy pro telemedicínu a vzdálené konzultace
- [ ] Vytvoření dashboardu pro analýzu zdravotnických dat

### Fáze 3: Rozšíření a optimalizace (Q2 2025 - Q3 2025)
- [ ] Integrace s hlavními poskytovateli zdravotního pojištění
- [ ] Implementace pokročilých analytických nástrojů a prediktivních modelů
- [ ] Vývoj mobilní aplikace pro pacienty

### Fáze 4: Škálování a expanze (Q4 2025 a dále)
- [ ] Rozšíření služeb do dalších regionů ČR
- [ ] Implementace modulů pro specifické zdravotnické obory
- [ ] Vývoj řešení pro mezinárodní trh

## Technologie

- Next.js pro frontend
- Tailwind CSS pro stylování
- TypeScript pro typovou bezpečnost
- Storybook pro vývoj a testování komponent
- React pro tvorbu uživatelského rozhraní
- Node.js a Express pro backend (plánováno)
- PostgreSQL pro databázi (plánováno)

## Instalace a spuštění

1. Naklonujte repozitář:
   ```
   git clone [URL_REPOZITÁŘE]
   ```

2. Nainstalujte závislosti:
   ```
   npm install
   ```

3. Spusťte vývojový server:
   ```
   npm run dev
   ```

4. Pro spuštění Storybooku:
   ```
   npm run storybook
   ```

## Testování

Pro spuštění testů použijte následující příkaz:

```
npm test
```

Tento příkaz spustí všechny testy v projektu. Pro spuštění testů v watch módu použijte:

```
npm run test:watch
```

## Struktura projektu

- `components/`: React komponenty
  - `magicui/`: Speciální UI komponenty jako OrbitingCircles
- `pages/`: Next.js stránky
- `public/`: Statické soubory a assets
  - `Brand materials/`: Loga a brandingové materiály
  - `stakeholders logos/`: Loga partnerů a stakeholderů
- `styles/`: Globální styly
- `lib/`: Utility a pomocné funkce
- `stories/`: Storybook příběhy pro komponenty
- `tests/`: Jednotkové a integrační testy

## Přispívání

Příspěvky jsou vítány. Prosím, otevřete issue nebo pull request pro jakékoliv návrhy nebo opravy.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)