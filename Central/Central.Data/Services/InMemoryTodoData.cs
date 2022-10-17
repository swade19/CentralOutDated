using Central.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Central.Data.Services
{
    public class InMemoryTodoData : ITodoData
    {
        List<ToDo> _toDoList;

        public InMemoryTodoData()
        {
            _toDoList = new List<ToDo>()
            {
                new ToDo() {
                    Id = 1,
                    Item = "Walk doug",
                    Description = "get towed"
                },
                new ToDo() {
                    Id = 2,
                    Item = "Play games",
                    Description = "on my deck"
                }
            };
        }

        public IEnumerable<ToDo> GetAll()
        {
            return _toDoList.OrderBy(i => i.Id);
        }
    }
}
