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
    public class OrderHistoryController:Controller
    {
        private readonly ApplicationDbContext _context;

        public OrderHistoryController(ApplicationDbContext context)
        {
            context = _context;
        }
            [HttpGet]
            // GET: CartItemController
            public IActionResult Get()
            {
                var getItem = _context.CartItems.ToList();
                return StatusCode(200, getItem);
            }
        
            [HttpPost("myCart"), Authorize]
             public IActionResult Post(CartItem item)
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
}
}
