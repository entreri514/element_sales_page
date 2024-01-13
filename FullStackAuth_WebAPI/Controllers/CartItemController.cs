using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
        [HttpGet]
        // GET: CartItemController
        public IActionResult Get()
        {
            var getItem = _context.CartItems.ToList();
            return StatusCode(200, getItem);
        }

        // GET: api/CartItems/myCart
        [HttpGet("myCart"), Authorize]
        public IActionResult GetUsersCart()
        {
            try
            {
                // Retrieve the authenticated user's ID from the JWT token
                string userId = User.FindFirstValue("id");

                // Retrieve all cartitems that belong to the authenticated user, select the related product objects
                var productsInCart = _context.CartItems.Where(c => c.UserId.Equals(userId)).Select(c => c.Product).ToList();

                // Return the list of cars as a 200 OK response
                return StatusCode(200, productsInCart);
            }
            catch (Exception ex)
            {
                // If an error occurs, return a 500 internal server error with the error message
                return StatusCode(500, ex.Message);
            }
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
                _context.Add(item);
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
        [HttpPut]
        // GET: CartItemController/Edit/5
        public IActionResult Put()
        {
            try
            {
                string userId = User.FindFirstValue("id");
                var products = _context.CartItems.Where(p => p.UserId.Equals(userId)).ToList();
                if (products == null)
                {
                    return NotFound();
                }
                foreach (var product in products)
                {             
                    product.OrderComplete = true;
                }
                if (!ModelState.IsValid)
                {
                   
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();

                return StatusCode(201, products);
            }
            catch (Exception ex)
            {
                // Return a 500 Internal Server Error with the error message if an exception occurs
                return StatusCode(500, ex.Message);
            }
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
        [HttpDelete("{id}")]
        // GET: CartItemController/Delete/5
        public IActionResult Delete(int id)
        {
            var deleteItem = _context.CartItems.Find(id);
            if (deleteItem == null)
            {
                return NotFound();
            }
            _context.CartItems.Remove(deleteItem);
            _context.SaveChanges();
            return NoContent();
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
