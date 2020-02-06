console.clear();
(() => {
  const gameList = [];
  let currentMonth = 0;
  // Remove rows that aren't for game lists.
  $("#Game_releases")
    .parent()
    .nextAll(".wikitable")
    .slice(0, 4)
    .each((index, table) => {
      // Remove headers from sortable and unsortable tables alike.
      if ($(table).hasClass("sortable")) {
        $(table)
          .find("thead")
          .remove();
      } else {
        $(table)
          .find("tr")
          .first()
          .remove();
      }

      // Clean up rows.
      $(table)
        .find("tbody tr")
        .each((i, tr) => {
          $(tr)
            .children("td")
            .each((i, cell) => {
              const bgColor = $(cell).css("background-color");
              const text = $(cell).text();
              if (bgColor !== "rgba(0, 0, 0, 0)") {
                // Clean month name.
                $(cell).text(text.replace("<br>", ""));
              } else {
                // Remove extra crap.
                if (text.match(/\[\d+\]/) || text.includes("citation")) {
                  $(cell).text("");
                }
//                 $(cell).text(
//                   $(cell)
//                     .text()
//                     .replace(/\[[\d{1}]\]/, "")
//                 );
              }
            });
        });

      // Process rows.
      let currentYear = 2020;
      let currentDay;
      let newGame, gameTitle, gameUrl, gameSystems, gameSystemUrl;
      $(table)
        .find("tbody tr")
        .each((i, tr) => {
          newGame = {};

          let td = $(tr).children("td");
          if ($(td[0]).css("background-color") !== "rgba(0, 0, 0, 0)") {
            // This is a month row.
            currentMonth++;
            currentDay = $(td[1]).text();
            gameTitle = $(td[2]).text();
            gameUrl = $(td[2]).find('a').attr('href');
            gameSystems = $(td[3]).text();
            gameSystemUrl = $(td[3]).find('a').attr('href');
          } else if (
            parseInt(
              $(td[0])
                .text()
                .trim()
            )
          ) {
            // This is a date row.
            currentDay = $(td[0]).text();
            gameTitle = $(td[1]).text();
            gameUrl = $(td[1]).find('a').attr('href');
            gameSystems = $(td[2]).text();
            gameSystemUrl = $(td[2]).find('a').attr('href');
          } else {
            gameTitle = $(td[0]).text();
            gameUrl = $(td[0]).find('a').attr('href');
            gameSystems = $(td[1]).text();
            gameSystemUrl = $(td[1]).find('a').attr('href');
          }

//           console.log(gameSystemUrl);

          newGame = {
            year: currentYear,
            month: currentMonth,
            url: gameUrl,
            day: currentDay ? parseInt(currentDay.trim()) : null,
            title: gameTitle.trim(),
            systems: gameSystems.split(",").map(system => system.trim()),
            systemUrl: gameSystemUrl
          };
          if (newGame.title !== '') {
            gameList.push(newGame);
          }
        });
    });
  console.log(gameList);
})();
