const pageConfig: PageConfig = {
  title: "Turkey's Status",
  links: [
    { link: 'https://github.com/turkey1024', label: 'GitHub' },
    { link: 'https://i.l.cd', label: 'Blog' },
    { link: 'mailto:i@i.l.cd', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'turkey_blog',
      name: "Turkey's Blog",
      method: 'GET',
      target: 'https://i.l.cd',
      expectedCodes: [200],
    },
    {
      id: 'turkey_feed',
      name: "Turkey's Feed",
      method: 'GET',
      target: 'https://feed.i.l.cd',
      expectedCodes: [200],
    },
    {
      id: 'turkey_nav',
      name: "Turkey's Nav",
      method: 'GET',
      target: 'https://ljx.is-not.cool',
      expectedCodes: [200],
    },
  ],
}

const maintenances: MaintenanceConfig[] = []
