using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Waini.Domain.Entities;

namespace Waini.Infrastructure.Context;

public partial class DbwainiContext : DbContext
{
    public DbwainiContext()
    {
    }

    public DbwainiContext(DbContextOptions<DbwainiContext> options)
        : base(options)
    {
    }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Users__3214EC0723D693D7");

            entity.Property(e => e.DNI).HasColumnName("DNI");
            entity.Property(e => e.LastName)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
