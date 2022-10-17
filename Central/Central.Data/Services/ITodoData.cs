using Central.Data.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Central.Data.Services
{
    public interface ITodoData
    {
        IEnumerable<ToDo> GetAll();
    }
}
