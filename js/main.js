window.timekitBookingConfig = {
      name: 'Rhonda Sher',
      email: 'linkedindiva@gmail.com',
      apiToken: '2EYkGBQZrhV76uBQn2u8Zwg8K0ONC30p',
      calendar: 'adfe7677-0446-4c85-9a67-676aa844b4ca',
      avatar: 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg',
      timekitFindTime: {
        filters: {
          and: [
            {
              business_hours: { }
            },
            {
              exclude_weekend: { }
            }
          ],
          or: [
            {
              specific_time: {
                start: '00',
                end: '12'
              }
            },
            {
              specific_time: {
                start: '13',
                end: '24'
              }
            }
          ]
        }
      }
    }
