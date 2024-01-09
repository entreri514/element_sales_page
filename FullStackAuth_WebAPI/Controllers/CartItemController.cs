using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartItemController : Controller
    {
        private readonly ApplicationDbContext _context;
        
        public CartItemController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        // GET: CartItemController
        public ActionResult Index()
        {
            return View();
        }

        // GET: CartItemController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: CartItemController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: CartItemController/Create
        [HttpPost, Authorize]
      
        public IActionResult Post([FromBody] CartItem item)
        {
            try
            {
                string userId = User.FindFirstValue("id");
                if (string.IsNullOrEmpty(userId))
                {
                    return Unauthorized();
                }
                item.UserId = userId;
                _context.CartItems.Add(item);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, item);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        // GET: CartItemController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: CartItemController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: CartItemController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: CartItemController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
