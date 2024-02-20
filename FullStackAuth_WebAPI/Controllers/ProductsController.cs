using FullStackAuth_WebAPI.Data;
using FullStackAuth_WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;
using System.Security.Claims;
using ZstdSharp.Unsafe;

namespace FullStackAuth_WebAPI.Controllers
{
    [Route("api/[controller]")]
   
    [ApiController]
    public class ProductsController : Controller
    {
        public readonly ApplicationDbContext _context;

        public ProductsController(ApplicationDbContext context)
        {
            _context=context;
        }
        // GET: ProductsController
        [HttpGet]
        public IActionResult Get()
        {
            var getItem = _context.Products.ToList();
            return StatusCode(200,getItem);
        }

        // GET: Products/5
        [HttpGet("{atomicNumber}")]
        
        public IActionResult GetByAtomicNumber(int atomicNumber)
        // {
        //     var getItem = _context.Products.Find(id);
        //     if (getItem==null)
        //     {
        //         return NotFound();
        //     }

        //     return StatusCode(200,getItem);
        // }
       {
           
                try
                {
                    var searchResult = _context.Products.Where(p => p.AtomicNumber.Equals(atomicNumber));
                    return StatusCode(200, searchResult);
                }
                catch (Exception ex)
                {
                    return StatusCode(500, ex.Message);
                }
            
        }
        //        [HttpGet("{itemType}")]
//        public IActionResult GetByItemType(string itemType)
        // GET: ProductsController/Create
        
 //       {
 //           try
 //           {
 //               var searchResult = _context.Products.Where(p => p.ItemType.Equals(itemType));
 //               return StatusCode(200, searchResult);
 //           }
 //           catch (Exception ex)
 //           {
 //               return StatusCode(500, ex.Message);
 //           }
 //       }

        


        public ActionResult Create()
        {
            return View();
        }

        // POST: ProductsController/Create
        [HttpPost]
        
        public IActionResult Post([FromBody] Product data)
        {
           
            try
            {
                

                _context.Products.Add(data);
                _context.Add(data);
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                _context.SaveChanges();
                return StatusCode(201, data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }



        }

        // GET: ProductsController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ProductsController/Edit/5
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

        // GET: ProductsController/Delete/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var deleteItem = _context.Products.Find(id);
            if (deleteItem==null)
            {
                return NotFound();
            }
            _context.Products.Remove(deleteItem);
            _context.SaveChanges();
            return NoContent();
        }

        // POST: ProductsController/Delete/5
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
