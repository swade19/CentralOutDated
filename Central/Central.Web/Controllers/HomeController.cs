using Central.Data.Models;
using Central.Data.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Central.Web.Controllers
{
    public class HomeController : Controller
    {
        InMemoryTodoData db;
        string baseUrl = "http://localhost:2000/"; 

        public HomeController()
        {
            //db = new InMemoryTodoData(); 
        }

        public async Task<ActionResult> Index()
        {
            List<ToDo> toDos = new List<ToDo>();
            using ( var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseUrl);
                client.DefaultRequestHeaders.Clear();
                //define request data format 
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //sending request to find web api rest service 
                HttpResponseMessage Response = await client.GetAsync("getTodo");

                if(Response.IsSuccessStatusCode)
                {
                    var toDoResponse =  Response.Content.ReadAsStringAsync();

                    toDos = JsonConvert.DeserializeObject<List<ToDo>>(await toDoResponse);
                }
            }
            return View(toDos);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}