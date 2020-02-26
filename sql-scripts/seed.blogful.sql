INSERT INTO blogful_articles (title, date_published, content)
VALUES
  ('blog 1', now() - '21 days'::INTERVAL, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
  ('blog 2', now() - '20 days'::INTERVAL, 'Mauris a diam metus. Fusce vitae sollicitudin nulla.'),
  ('blog 3', now() - '19 days'::INTERVAL, 'Maecenas finibus laoreet odio sit amet feugiat.'),
  ('blog 4', now() - '18 days'::INTERVAL, 'Aenean nec dui nec diam volutpat rutrum.'),
  ('blog 5', now() - '17 days'::INTERVAL, 'Pellentesque ut semper massa. Etiam congue.'),
  ('blog 6', now() - '16 days'::INTERVAL, 'Diam ut blandit fringilla, arcu tortor cursus nibh, quis scelerisque elit sem nec augue.'),
  ('blog 7', now() - '15 days'::INTERVAL, 'Vestibulum sed orci consequat, tempus est et, vehicula velit.'),
  ('blog 8', now() - '14 days'::INTERVAL, 'Vivamus eget mi euismod, tempus quam quis, dictum tellus.'),
  ('blog 9', now() - '13 days'::INTERVAL, 'Integer ornare orci ac lectus fermentum posuere.'),
  ('blog 10', now() - '12 days'::INTERVAL, 'Etiam id consequat nisi. Mauris vitae enim fringilla, imperdiet purus et, accumsan turpis.'),
  ('blog 11', now() - '11 days'::INTERVAL, 'Etiam consequat venenatis condimentum. Suspendisse potenti.'),
  ('blog 12', now() - '10 days'::INTERVAL, 'Donec lacus nulla, gravida laoreet ultrices id, varius eu dui.'),
  ('blog 13', now() - '9 days'::INTERVAL, 'Aliquam porttitor felis vel vehicula porttitor.'),
  ('blog 14', now() - '8 days'::INTERVAL, 'Integer eu maximus tortor, vitae sodales lectus.'),
  ('blog 15', now() - '7 days'::INTERVAL, 'In eget tincidunt felis, nec dictum erat.'),
  ('blog 16', now() - '6 days'::INTERVAL, 'Sed ac congue erat, non fringilla risus.'),
  ('blog 17', now() - '5 days'::INTERVAL, 'Quisque bibendum libero nec massa lobortis elementum.'),
  ('blog 18', now() - '4 days'::INTERVAL, 'Aenean ex quam, vulputate sed metus sollicitudin, scelerisque pellentesque tellus.'),
  ('blog 19', now() - '3 days'::INTERVAL, 'Aenean non malesuada mi. Nullam ultrices mi a pulvinar vulputate.'),
  ('blog 20', now() - '2 days'::INTERVAL, 'Nam elementum arcu vel ante maximus varius.'),
  ('blog 21', now(), 'Mauris hendrerit felis interdum pellentesque elementum. ')
  ;