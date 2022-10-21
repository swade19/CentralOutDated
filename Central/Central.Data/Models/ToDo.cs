using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Central.Data.Models
{
    public class ToDo
    {
        public string Item { get; set; }

        public int Id { get; set; }

        public string Description { get; set; }

        public bool IsComplete { get; set; }
    }
}
