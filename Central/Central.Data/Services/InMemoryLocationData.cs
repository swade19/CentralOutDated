using Central.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Central.Data.Services
{
    public class InMemoryLocationData : ILocationData
    {
        private List<Location> locations;
    
        public InMemoryLocationData()
        {
            locations = new List<Location>()
            {
                new Location { Place = "Peterborough"}
            };
        }

        public IEnumerable<Location> GetAll()
        {
            return locations.OrderBy(l => l.Place);
        }
    }
}
