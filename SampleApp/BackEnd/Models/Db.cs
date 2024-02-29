using Microsoft.EntityFrameworkCore;

namespace BackEnd.Models;

public class Db : DbContext
{
    public Db(DbContextOptions<Db> options) : base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; } = null!;
}