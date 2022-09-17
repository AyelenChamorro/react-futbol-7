export default function useNavbar() {
  const links = [
    {
      name: 'F8 Night',
      links: [
        {
          name: 'Categoría A',
          key: 'Categoría A',
          sublinks: [
            {
              name: 'CA Link 1',
              url: '/ca1'
            },
            {
              name: 'CA Link 2',
              url: '/ca2'
            },
            {
              name: 'CA Link 3',
              url: '/ca3'
            }
          ]
        },
        {
          name: 'Categoría B',
          key: 'Categoría B',
          sublinks: [
            {
              name: 'CB Link 1',
              url: '/cb1'
            },
            {
              name: 'CB Link 2',
              url: '/cb2'
            },
            {
              name: 'CB Link 3',
              url: '/cb3'
            }
          ]
        },
        {
          name: 'Categoría C',
          key: 'Categoría C',
          sublinks: [
            {
              name: 'CC Link 1',
              url: '/cc1'
            },
            {
              name: 'CC Link 2',
              url: '/cc2'
            },
            {
              name: 'CC Link 3',
              url: '/cc3'
            }
          ]
        }
      ]
    },
    {
      name: 'F8 Sábados',
      links: [
        {
          name: 'Sábados  Categoría A',
          key: 'Sábados  Categoría A',
          sublinks: [
            {
              name: 'Sábados CA Link 1',
              url: '/sca1'
            },
            {
              name: 'Sábados CA Link 2',
              url: '/sca2'
            },
            {
              name: 'Sábados CA Link 3',
              url: '/sca3'
            }
          ]
        },
        {
          name: 'Sábados Categoría B',
          key: 'Sábados Categoría B',
          sublinks: [
            {
              name: 'Sábados CB Link 1',
              url: '/scb4'
            },
            {
              name: 'Sábados CB Link 2',
              url: '/sca3'
            },
            {
              name: 'Sábados CB Link 3',
              url: '/sca3'
            }
          ]
        },
        {
          name: 'Sábados Categoría C',
          key: 'Sábados Categoría C',
          sublinks: [
            {
              name: 'Sábados CC Link 1',
              url: '/f7sabados'
            },
            {
              name: 'Sábados CC Link 2',
              url: '/f7sabados'
            },
            {
              name: 'Sábados CC Link 3',
              url: '/f7sabados'
            }
          ]
        }
      ]
    },
    {
      name: 'La Liga',
      links: [
        {
          name: 'Reglamentos',
          url: '/reglamentos'
        },
        {
          name: 'Postales',
          url: '/postales'
        },
        {
          name: 'Servicios',
          url: '/servicios'
        }
      ]
    }
  ];
  return links;
}
