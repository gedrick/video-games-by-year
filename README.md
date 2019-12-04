## Video Games By Year

### What is this?

This is an archive of video game releases across all systems and consoles. It's filterable by year and by console. You can multi-select both.

### But why?

I needed a quick way to glance through video game releases on a per-system basis. I couldn't find exactly what I needed, so I whipped this up over the span of a few nights to deliver exactly what I needed.

I also wanted it to work beautifully and quickly on mobile devices, so it scales down nicely to 320w on my trusty iPhone SE. I am happy with this fact.

### Challenges

The toughest part is gathering the data, which is/was scraped from Wikipedia pages using a rough script that abuses jQuery to the extreme.

It runs through tables, pulls out months/days/years/titles/consoles/urls, and dumps it into an object, which is then saved into the project. Since nothing ever changes in past releases, and I wanted it to work quickly, this worked to my specifications.

### Why's it only go back to 2007?

You'll notice that the years only goes back to 2007. This is due to the ever-changing table structure on the `XXXX year in gaming` articles on Wikipedia. 2006 back to ~1995 use a different table structure, and before 1995 the table structure is abandoned entirely, relying on long-winded sentences to describe each release.

In other words, "I'll get to it eventually!"

### How's it hosted?

Github Pages, baby! Free to use and does the trick just fine, as there is no server component. Everything's bundled into one big ol' JS file.

## Support or Contact

If you'd like to help out with some more data, check out the data structure, crack open `scrape-wiki.js`, and modify it till your heart's content. Then, either open a PR with the JSON object or paste it into an issue, whichever's easier.

If you found a bug, also feel free to kick up an issue.
